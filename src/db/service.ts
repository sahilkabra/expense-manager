import Datastore = require('@google-cloud/datastore');
import { QueryResult } from '@google-cloud/datastore/query';

import { getStore } from './connection';

export const createEntity = (key: string) => (
    data: [{ [key: string]: any }]
) => {
    const store = getStore();
    const dataKey = store.key([key]);
    const entity = {
        data,
        key: dataKey,
    };
    return store
        .save(entity)
        .then(result => result[0].mutationResults[0].key.id);
};

const addIdToResult = (store: Datastore) => (result: object[]) => ({
    ...result,
    id: result[store.KEY].id,
});

const transformQueryResult = (store: Datastore) => (results: QueryResult) =>
    results[0].map(addIdToResult(store));

export const listEntities = (key: string, sortBy: string = '') => {
    const store = getStore();
    const query = store.createQuery(key).order(sortBy);
    return store.runQuery(query).then(transformQueryResult(store));
};

export const listEntityById = (key: string, sortBy: string = '') => (
    entityId: string
) => {
    const store = getStore();
    const query = store
        .createQuery(key)
        .filter('__key__', store.key([key]))
        .order(sortBy);
    return store.runQuery(query).then(transformQueryResult(store));
};

export const filterEntities = (key: string, sortBy: string = '') => (filters: {
    [key: string]: any;
}) => {
    const store = getStore();
    const query = store.createQuery(key).order(sortBy);
    Object.keys(filters).forEach(k => query.filter(k, filters[k]));
    return store.runQuery(query).then(transformQueryResult(store));
};

export const deleteEntity = (key: string) => (entityId: string) => {
    const store = getStore();
    const entityPath = store.key([key, entityId]);
    return store.delete(entityPath);
};

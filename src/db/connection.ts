import Datastore = require('@google-cloud/datastore');

let store: Datastore;

export function connectToDb() {
    store = new Datastore({});
    return store;
}

export const getStore = () => (store ? store : connectToDb());

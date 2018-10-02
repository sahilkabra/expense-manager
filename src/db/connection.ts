import Datastore = require('@google-cloud/datastore');

let store: Datastore;

export function connectToDb() {
    store = new Datastore({
        keyFilename: 'gcp-account.json',
    });
    return store;
}

export const getStore = () => (store ? store : connectToDb());

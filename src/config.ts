/**
 * The only place where process is used.
 * Stores any env configuration that is required.
 * The app will get all properties from this object
 */
const config = {
    appName: 'cars-service',
    express: {
        port: process.env.PORT || 9001,
    },
    mongo: {
        dbName: process.env.MONGODB || 'cars',
        get: (key: string) => process[key],
        host: process.env.MONGOHOST || 'localhost',
        pid: process.pid,
        port: process.env.MONGOPORT || 27017,
        url: () =>
            `mongodb://${config.mongo.host}:${config.mongo.port}/${
                config.mongo.dbName
            }`,
    },
};

export default config;

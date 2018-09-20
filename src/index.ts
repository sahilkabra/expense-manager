import config from './config';
// import connection from './db/connection';
import logger from './logger';
import server from './server';

// connection.connectToMongo();

server.listen(config.express.port, (err: any) => {
    if (err) {
        return logger.error(err);
    }

    return logger.info(`server is listening on ${config.express.port}`);
});

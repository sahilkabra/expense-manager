import * as winston from 'winston';

/**
 * A default logger for the app
 */
const logger = winston.createLogger({
    format: winston.format.json(),
    level: 'info',
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.Console({
            format: winston.format.simple(),
        }),
    ],
});

export default logger;

import * as Winston from 'winston';

export const logger = Winston.createLogger();

// export const logger = Winston.createLogger({
//     level: 'info',
//     format: Winston.format.json(),
//     transports: [
//         new Winston.transports.File({ filename: 'error.log', level: 'error' }),
//         new Winston.transports.File({ filename: 'combined.log' }),
//         new Winston.transports.Console({ format: Winston.format.simple() })
//     ]
// });

process.on('unhandledRejection', function (reason, p) {
  logger.warn('Possibly Unhandled Rejection at: Promise ', p, ' reason: ', reason);
});

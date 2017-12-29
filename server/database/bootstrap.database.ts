import * as mongoose from 'mongoose';
import * as chalk from 'chalk';

import { dbConnectionString, dbPass, dbUName, dbReconnectLimit } from '../config';

let hasBootstrapped = false;

function bootstrapDb(attempt = 0) {
    if (!attempt) (mongoose as any).Promise = Promise;
    
    return mongoose.connect(dbConnectionString, { useMongoClient: true })
        .then(() => {
            console.log(chalk.blue('Connected to the database'));
            hasBootstrapped = true;
        })
        .catch(err => {
            console.error(chalk.red(err));
            
            if (attempt > dbReconnectLimit) {
                return err;
            }
            
            console.warn(`Attempting try number ${++attempt} of ${dbReconnectLimit}`);
            
            return bootstrapDb(attempt);
        });
}

export {
    bootstrapDb,
    hasBootstrapped,
};
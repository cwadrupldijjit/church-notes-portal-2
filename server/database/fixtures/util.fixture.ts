import * as chalk from 'chalk';
import { Model } from 'mongoose';

const DELETE = 'DELETE';
const CREATE = 'CREATE';
const UPDATE = 'UPDATE';

function getDefaultFixtureErrorCatch(stage: string, model: Model<any>) {
    return (err) => {
        if (typeof err == 'string') {
            err = { message: err };
        }
        
        console.log(`FIXTURE:  ${stage}:  Error while running fixtures for ${model.modelName}:`)
    };
}

export {
    getDefaultFixtureErrorCatch,
    DELETE,
    CREATE,
    UPDATE,
};
import { Model } from 'mongoose';
import * as chalk from 'chalk';

function getBasicFixtureRunner(data: {[key: string]: any}[], model: Model<any>, primaryField = 'name') {
    return function runFixture() {
        return [
            model.remove({ [primaryField]: { $nin: data.map(d => d[primaryField]) } })
                .catch(err => {
                    console.error(chalk.red(`FIXTURE:  error while removing excess records for ${model.modelName}:`));
                    console.error(err);
                    
                    throw err;
                }),
            ...data.map(doc => {
                return model.findOneAndUpdate({[primaryField]: doc[primaryField]}, doc)
                    .then(update => {
                        if (!update)
                            return model.create(doc);
                        
                        return true;
                    })
                    .then(newDoc => {
                        if (!newDoc)
                            return true;
                    })
                    .catch(err => {
                        if (typeof err == 'string') {
                            err = { message: err };
                        }
                        
                        console.error(chalk.red(`FIXTURE: Error while loading fixtures for ${model.modelName}:`));
                        console.error(err);
                        
                        throw err;
                    });
            }),
        ];
    };
}

export {
    getBasicFixtureRunner,
};
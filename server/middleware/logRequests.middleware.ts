import * as express from 'express';
import * as chalk from 'chalk';

function logRequests(options = {} as {[key: string]: any}) {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
        if (!options.hasOwnProperty('enabled') || options.enabled) {
            console.log(`${ chalk.yellow('%s') } to ${ chalk.green('%s') }`, req.method, req.originalUrl);
        }
        
        next();
    };
}

export default logRequests;
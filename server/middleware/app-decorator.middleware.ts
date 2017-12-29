import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as fingerprint from 'express-fingerprint';

import logRequests from './logRequests.middleware';
import { passport } from '../auth';

function decorateApp(app: express.Application) {
    app.use(logRequests());
    app.use(helmet());
    app.use(bodyParser.json());
    app.use(fingerprint())
    
    app.use(passport.initialize());
    
    return app;
}

export default decorateApp;

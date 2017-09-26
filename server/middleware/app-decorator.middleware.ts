import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as session from 'express-session';

import logRequests from './logRequests.middleware';

import { sessionSecret } from '../config';

function decorateApp(app: express.Application) {
    app.use(logRequests());
    app.use(helmet());
    app.use(bodyParser.json());
    app.use(session({
        secret: sessionSecret,
        saveUninitialized: true,
        resave: false,
    }));
    
    return app;
}

export default decorateApp;

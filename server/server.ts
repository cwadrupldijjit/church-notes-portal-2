import * as express from 'express';
import * as chalk from 'chalk';

import { host,
         port,
         protocol } from './config';
import { bootstrapDb } from './database';

import decorateApp from './middleware/app-decorator.middleware';
import delegateRoutes from './routers/delegate.router';

const app = express();

decorateApp(app);

bootstrapDb();

delegateRoutes(app);

app.listen(port, () => {
    console.log(`${ chalk.green('Server running and listening for connections and requests at') } ${ chalk.cyan('%s://%s:%s') }`, protocol, host, port);
});
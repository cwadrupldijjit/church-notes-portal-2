import * as https from 'https';
import * as path from 'path';
import * as fs from 'fs';

import * as express from 'express';
import * as chalk from 'chalk';

import { host,
         port,
         protocol, 
         securePort} from './config';
import { bootstrapDb } from './database';

import decorateApp from './middleware/app-decorator.middleware';
import delegateRoutes from './routers/delegate.router';

import { bootstrapHttp } from './http-redirect-server';

const { lex } = bootstrapHttp();

const app = express();

decorateApp(app);

bootstrapDb();

delegateRoutes(app);

const server = https.createServer({
    key: fs.readFileSync(path.join(__dirname, '../certs/key.pem'), 'utf8'),
    cert: fs.readFileSync(path.join(__dirname, '../certs/certificate.pem'), 'utf8'),
    passphrase: '1qazXSW@',
    SNICallback: lex.SNICallback,
}, lex.middleware(app));

server.listen(securePort, () => {
    console.log(`${ chalk.green('Server running and listening for connections and requests at') } ${ chalk.cyan('%s://%s:%s') }`, protocol, host, securePort);
});
import * as http from 'http';
import * as path from 'path';

import { create } from 'greenlock-express';
import * as certbot from 'le-store-certbot';
import * as challengeFs from 'le-challenge-fs';
import * as challengeSni from 'le-challenge-sni';
import * as redirectHttps from 'redirect-https';
import * as chalk from 'chalk';

import { port, securePort, host, protocol, acmeServer } from './config';

function bootstrapHttp() {
    const lex = create({
        server: acmeServer,
        challenges: {
            'http-01': challengeFs.create({ webrootPath: path.join(__dirname, '../tmp/acme-challenges'),
            'tls-sni-01': challengeSni.create({ debug: false }),
            'tls-sni-02': challengeSni.create({ debug: false }),
        })},
        store: certbot.create({ webrootPath: path.join(__dirname, '../tmp/acme-challenges') }),
        approveDomains,
    });

    function approveDomains(opts, certs, cb) {
        // This is where you check your database and associated
        // email addresses with domains and agreements and such
    
    
        // The domains being approved for the first time are listed in opts.domains
        // Certs being renewed are listed in certs.altnames
        if (certs) {
            opts.domains = certs.altnames;
        }
        else {
            opts.email = 'sskeen9@gmail.com';
            opts.agreeTos = true;
        }
    
        // NOTE: you can also change other options such as `challengeType` and `challenge`
        // opts.challengeType = 'http-01';
        // opts.challenge = require('le-challenge-fs').create({});
    
        cb(null, { options: opts, certs: certs });
    }

    const server = http.createServer(lex.middleware(redirectHttps({ port: securePort })));

    server.listen(port, () => {
        console.log(`Redirecting traffic from ${chalk.yellow(`http://${ host }:${ port }`)} to ${chalk.green(`${ protocol }://${ host }:${ securePort }`)}`);
    });
    
    return {
        server,
        lex,
    };
}

export {
    bootstrapHttp,
};
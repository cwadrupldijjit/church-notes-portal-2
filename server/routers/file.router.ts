import * as express from 'express';

import logFileRequests from '../middleware/log-file-requests.middleware';

function FileRouter(app: express.Application) {
    app.use(logFileRequests(__dirname + '/../../', { webrootPath: __dirname + '/../../public' }));
    
    app.use('/node_modules', express.static(__dirname + '/../../node_modules', { redirect: false }));
    app.use('/common', express.static(__dirname + '/../../common', { redirect: false }));
    app.use('/', express.static(__dirname + '/../../public', { redirect: false }));
    
    app.all('*', (req, res) => {
        res.sendFile('index.html', { root: __dirname + '/../../public' });
    });
    
    return app;
}

export default FileRouter;
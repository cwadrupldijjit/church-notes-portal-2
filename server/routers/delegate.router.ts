import * as express from 'express';

import AuthRouter from './auth.router';
import ApiRouter from './api.router';
import FileRouter from './file.router';

function delegate(app: express.Application) {
    app.use('/auth', AuthRouter);
    app.use('/api', ApiRouter);
    
    FileRouter(app);
    
    return app;
}

export default delegate;
import * as express from 'express';
import { passport } from '../auth';

const ApiRouter = express.Router();

ApiRouter.use(passport.authenticate('jwt', { session: false }));

ApiRouter.all('*', (req, res) => {
    res.status(404).send({
        message: `Cannot find resource at ${ req.originalUrl }`,
        status: 'Error',
        success: 'false',
    });
});

export default ApiRouter;
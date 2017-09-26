import * as express from 'express';

const ApiRouter = express.Router();

ApiRouter.all('*', (req, res) => {
    res.status(404).send({
        message: `Cannot find resource at ${ req.originalUrl }`,
        status: 'Error',
        success: 'false',
    });
});

export default ApiRouter;
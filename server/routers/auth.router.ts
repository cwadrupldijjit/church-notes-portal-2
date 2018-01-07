import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import { passport } from '../auth/index';
import { generateAuthToken } from '../middleware';

const AuthRouter = express.Router();

AuthRouter.post('/login', passport.authenticate('login', { session: false }),  generateAuthToken(), (req, res) => {
    res.send({
        user: req.user,
    });
});

AuthRouter.post('/register', passport.authenticate('register', { session: false }), generateAuthToken(), (req, res) => {
    res.send({
        user: req.user,
    });
});

AuthRouter.get('/logout', (req, res) => {
    req.logOut();
    
    res.send({
        message: 'logged out',
    });
});

export default AuthRouter;
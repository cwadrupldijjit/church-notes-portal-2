import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import { passport } from '../auth/index';

const AuthRouter = express.Router();

AuthRouter.post('/login', passport.authenticate('login'), () => {});
AuthRouter.post('/register', passport.authenticate('register'), () => {});
AuthRouter.get('/logout', (req, res) => {
    req.logOut();
    
    // req.header('Authorization')
});

export {
    AuthRouter,
};
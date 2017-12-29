import * as passport from 'passport';

import { configureLogin } from './login.auth';
import { configureRegister } from './register.auth'
import { configureJWT } from './jwt.auth';

configureLogin(passport);
configureRegister(passport);
configureJWT(passport);

export {
    passport,
};
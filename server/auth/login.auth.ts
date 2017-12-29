import { PassportStatic as p } from 'passport';
import { Strategy as LoginStrategy } from 'passport-local';

import { passwordsDoMatch } from './bcrypt.auth';
import { UserModel } from '../database';

function configureLogin(passport: p) {
    passport.use('login', new LoginStrategy((username, password, done) => {
        UserModel
            .findOne({username})
            .then(user => {
                if (!user)
                    throw `No user by name ${username}`;
                
                if (!passwordsDoMatch(user.password, password))
                    throw 'Incorrect password';
                
                done(null, user);
            })
            .catch(err => {
                if (typeof err == 'string') {
                    err = { message: err };
                }
                
                done(err);
            });
    }));
    
    return passport;
}

export {
    configureLogin,
};
import { PassportStatic as p } from 'passport';
import { Strategy as RegisterStrategy } from 'passport-local';

import { passwordsDoMatch } from './bcrypt.auth';
import { UserModel, UserDocument } from '../database';

function configureRegister(passport: p) {
    passport.use('register', new RegisterStrategy({ passReqToCallback: true }, (req, username, password, done) => {
        const { email } = req.body as UserDocument;
        
        UserModel
            .findOne({
                $or: [
                    { username },
                    { email },
                ],
            })
            .then(user => {
                const match = user || (user.email == email ? 'email' : 'username');
                if (match)
                    throw `Unable to create user, ${match} is already taken`;
                
                return UserModel.create({ username, password, email });
            })
            .then(user => {
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
    configureRegister,
};
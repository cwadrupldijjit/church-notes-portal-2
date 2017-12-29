import { PassportStatic as p } from 'passport';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';

import { UserModel, SessionModel } from '../database';
import { JWTSecret } from '../config';

function configureJWT(passport: p) {
    passport.use(new JWTStrategy({
            secretOrKey: JWTSecret,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            passReqToCallback: true,
        }, (req, payload, done) => {
            const token = ExtractJwt.fromAuthHeaderAsBearerToken()(req);
            
            SessionModel
                .findOne({ token })
                .then(session => {
                    if (!session || session.fingerprint != req.fingerprint.hash) {
                        throw `Invalid token`;
                    }
                    
                    return UserModel.findById(payload.id);
                })
                .then(user => {
                    if (!user)
                        throw `No user found with id ${payload.id}`;
                    
                    done(null, user);
                })
                .catch(err => {
                    if (typeof err == 'string') {
                        err = { message: err };
                    }
                    
                    done(err);
                });
        })
    )
    
    return passport;
}

export {
    configureJWT,
};
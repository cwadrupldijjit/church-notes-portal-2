import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import * as jwt from 'jsonwebtoken';
import * as guid from 'guid';
import { JWTSecret } from '../config';
import { SessionModel, Session } from '../database';

declare module 'express' {
    export interface Request {
        token?: string;
        fingerprint?;
    }
}

async function generateAuthToken() {
    return (req: Req, res: Res, next: Next) => {
        const token = jwt.sign({
            id: req.user._id,
        }, JWTSecret, {
            jwtid: guid.raw(),
            expiresIn: 30,
        });
        
        req.token = token;
        
        SessionModel
            .create({
                fingerprint: req.fingerprint.hash,
                token,
            } as Session)
            
    };
}

export {
    generateAuthToken,
};
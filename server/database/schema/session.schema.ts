import { Schema, model, Model, Document } from 'mongoose';

type Session = {
    token: string;
    fingerprint: string;
    lastActive?: Date|number;
};

type SessionDocument = Document & Session;

const SessionSchema = new Schema({
    token: { type: String, unique: true },
    fingerprint: { type: String, unique: true },
    lastActive: Number,
});

SessionSchema.pre('save', function(next) {
    if (!this.lastActive) {
        this.lastActive = Date.now();
    }
    
    if ((this as SessionDocument).lastActive instanceof Date) {
        this.lastActive = this.lastActive.getTime();
    }
});

SessionSchema.post('init', function(done, doc) {
    //
});

const SessionModel = model('Session', SessionSchema) as Model<SessionDocument>;

export {
    Session,
    SessionDocument,
    SessionModel,
};
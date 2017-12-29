import { Schema, model, Model, Document } from 'mongoose';
import { encryptPassword } from '../../auth';

type UserDocument = Document & {
    password?: string;
    username?: string;
    lastActive?: Date|number;
    joinedOn?: Date|number;
    email?: string;
};

const UserSchema = new Schema({
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    lastActive: { type: Number, required: true },
    joinedOn: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
});

UserSchema.pre('save', function() {
    if ((this as UserDocument).isNew)
        (this as UserDocument).joinedOn = Date.now();
    
    if ((this as UserDocument).isModified('password'))
        (this as UserDocument).password = encryptPassword(this.password);
});

UserSchema.post('init', function(err, doc, next) {
    (this as UserDocument).joinedOn = new Date(this.joinedOn);
    (this as UserDocument).lastActive = this.lastActive ? new Date(this.lastActive) : null;
});

const UserModel = model('User', UserSchema) as Model<UserDocument>

export {
    UserModel,
    UserDocument,
};
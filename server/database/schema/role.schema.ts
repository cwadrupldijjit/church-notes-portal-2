import { Schema, model, Model, Document } from 'mongoose';

type Role = {
    name: string;
    _id?: string;
};

type RoleDocument = Document & Role;

const RoleSchema = new Schema({
    name: { type: String, required: true },
});

const RoleModel = model('Role', RoleSchema) as Model<RoleDocument>;

export {
    Role,
    RoleDocument,
    RoleModel,
};
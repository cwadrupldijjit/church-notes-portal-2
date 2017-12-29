import { Schema, model, Document, Model } from 'mongoose';

type Status = {
    _id?: string;
    name: string;
};

type StatusDocument = Document & Status;

const StatusSchema = new Schema({
    name: { type: String, required: true },
});

const StatusModel = model('Status', StatusSchema) as Model<StatusDocument>;

export {
    Status,
    StatusDocument,
    StatusModel,
};
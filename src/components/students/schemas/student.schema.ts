import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const StudentSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    classes: [{ type: Schema.Types.ObjectId, ref: 'Class' }]
});
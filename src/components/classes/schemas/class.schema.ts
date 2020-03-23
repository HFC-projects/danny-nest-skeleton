import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const ClassSchema = new Schema({
	_id: Schema.Types.ObjectId,
	name: String,
	students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
	teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' }
});
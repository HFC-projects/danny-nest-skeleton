import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const TeacherSchema = new Schema({
	_id: Schema.Types.ObjectId,
	name: String,
	class: { type: Schema.Types.ObjectId, ref: 'Class' }
});
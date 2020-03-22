import { Document } from 'mongoose';
import { Class } from '../../classes/interfaces/class.interface';

export interface Teacher extends Document {
	readonly _id: string,
	readonly name: string,
	readonly class: Class
}
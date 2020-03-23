import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Class } from './interfaces/class.interface';
import { CreateClassDto } from './dto/create-class.dto';

@Injectable()
export class ClassesService {
	constructor(
		@Inject('CLASS_MODEL')
		private classModel: Model<Class>,
	) { }

	async create(createClassDto: CreateClassDto): Promise<Class> {
		const createdClass = new this.classModel(createClassDto);
		return createdClass.save();
	}

	async getAll(): Promise<Class[]> {
		return this.classModel.find().exec();
	}

	async getById(id): Promise<Class> {
		return this.classModel.findById(id).populate('teacher').populate('students').exec();
	}

	async update(id, createClassDto: CreateClassDto): Promise<Class> {
		return this.classModel.updateOne({ _id: id }, createClassDto, { new: true });
	}

	async remove(id): Promise<any> {
		return this.classModel.remove({ _id: id });
	}
}
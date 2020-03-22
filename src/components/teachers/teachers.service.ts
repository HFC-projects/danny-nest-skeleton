import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Teacher } from './interfaces/teacher.interface';
import { CreateTeacherDto } from './dto/create-teacher.dto';

@Injectable()
export class TeachersService {
	constructor(
		@Inject('TEACHER_MODEL')
		private teacherModel: Model<Teacher>,
	) { }

	async create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
		const createdTeacher = new this.teacherModel(createTeacherDto);
		return createdTeacher.save();
	}

	async getAll(): Promise<Teacher[]> {
		let x= await this.teacherModel.find().exec();
		return x;
	}

	async getById(id): Promise<Teacher> {
		return await this.teacherModel.findById(id).exec();
	}

	async update(id, createTeacherDto: CreateTeacherDto): Promise<Teacher> {
		return await this.teacherModel.updateOne({ _id: id }, createTeacherDto, { new: true });
	}

	async remove(id): Promise<any> {
		return this.teacherModel.remove({ _id: id });
	}
}
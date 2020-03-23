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
		return this.teacherModel.find().exec();
	}

	async getById(id): Promise<Teacher> {
		return this.teacherModel.findById(id).populate('class').exec();

	}

	async update(id, createTeacherDto: CreateTeacherDto): Promise<Teacher> {
		return this.teacherModel.updateOne({ _id: id }, createTeacherDto, { new: true });
	}

	async remove(id): Promise<any> {
		return this.teacherModel.remove({ _id: id });
	}
}
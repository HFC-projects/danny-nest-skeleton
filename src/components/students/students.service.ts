import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Student } from './interfaces/student.interface';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentsService {
	constructor(
		@Inject('STUDENT_MODEL')
		private studentModel: Model<Student>,
	) { }

	async create(createStudentDto: CreateStudentDto): Promise<Student> {
		const createdStudent = new this.studentModel(createStudentDto);
		return createdStudent.save();
	}

	async getAll(): Promise<Student[]> {
		return this.studentModel.find().exec();
	}

	async getById(id): Promise<Student> {
		return await this.studentModel.findById(id).populate('classes').exec();
	}

	async update(id, createStudentDto: CreateStudentDto): Promise<Student> {
		return this.studentModel.updateOne({ _id: id }, createStudentDto, { new: true });
	}

	async remove(id): Promise<any> {
		return this.studentModel.remove({ _id: id });
	}
}
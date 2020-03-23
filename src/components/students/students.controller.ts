import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from './interfaces/student.interface';

@Controller('Students')
export class StudentsController {
	constructor(private readonly studentsService: StudentsService) { }

	@Get()
	getAllStudents(): Promise<Student[]> {
		return this.studentsService.getAll();
	}

	@Get(':id')
	async getStudentById(@Param('id') id): Promise<Student> {
		return this.studentsService.getById(id);
	}

}

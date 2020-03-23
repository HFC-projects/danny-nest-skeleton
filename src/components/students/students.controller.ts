import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { StudentsService } from './students.service';
import { Student } from './interfaces/student.interface';
import * as HttpStatusCodes from 'http-status-codes';

@ApiTags('Students')
@Controller('Students')
export class StudentsController {
	constructor(private readonly studentsService: StudentsService) { }

	@Get()
	@ApiResponse({ status: HttpStatusCodes.OK, description: 'The query was fulfilled successfully'})
	@ApiResponse({ status: HttpStatusCodes.INTERNAL_SERVER_ERROR, description: 'An error occured'})
	getAllStudents(): Promise<Student[]> {
		return this.studentsService.getAll();
	}

	@Get(':id')
	@ApiResponse({ status: HttpStatusCodes.OK, description: 'The query was fulfilled successfully'})
	@ApiResponse({ status: HttpStatusCodes.NOT_FOUND, description: 'The given ID was not found'})
	@ApiResponse({ status: HttpStatusCodes.INTERNAL_SERVER_ERROR, description: 'An error occured'})
	async getStudentById(@Param('id') id): Promise<Student> {
		return this.studentsService.getById(id);
	}

}

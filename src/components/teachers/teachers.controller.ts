import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { Teacher } from './interfaces/teacher.interface';

@Controller('Teachers')
export class TeachersController {
	constructor(private readonly teacherService: TeachersService) { }

	@Get()
	getAllTeachers(): Promise<Teacher[]> {
		return this.teacherService.findAll();
	}

	@Get(':id')
	async getTeacherById(@Param('id') id): Promise<Teacher> {
		return this.teacherService.findOne(id);
	}

}

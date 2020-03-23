import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { TeachersService } from './teachers.service';
import { Teacher } from './interfaces/teacher.interface';
import * as HttpStatusCodes from 'http-status-codes';

@ApiTags('Teachers')
@Controller('Teachers')
export class TeachersController {
	constructor(private readonly teachersService: TeachersService) { }

	@Get()
	@ApiResponse({ status: HttpStatusCodes.OK, description: 'The query was fulfilled successfully'})
	@ApiResponse({ status: HttpStatusCodes.INTERNAL_SERVER_ERROR, description: 'An error occured'})
	getAllTeachers(): Promise<Teacher[]> {
		return this.teachersService.getAll();
	}

	@Get(':id')
	@ApiResponse({ status: HttpStatusCodes.OK, description: 'The query was fulfilled successfully'})
	@ApiResponse({ status: HttpStatusCodes.NOT_FOUND, description: 'The given ID was not found'})
	@ApiResponse({ status: HttpStatusCodes.INTERNAL_SERVER_ERROR, description: 'An error occured'})
	async getTeacherById(@Param('id') id: string): Promise<Teacher> {
		return this.teachersService.getById(id);
	}
}

import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { ClassesService } from './classes.service';
import { Class } from './interfaces/class.interface';
import * as HttpStatusCodes from 'http-status-codes';

@ApiTags('Classes')
@Controller('Classes')
export class ClassesController {
	constructor(private readonly classesService: ClassesService) { }

	@Get()
	@ApiResponse({ status: HttpStatusCodes.OK, description: 'The query was fulfilled successfully'})
	@ApiResponse({ status: HttpStatusCodes.INTERNAL_SERVER_ERROR, description: 'An error occured'})
	getAllClasses(): Promise<Class[]> {
		return this.classesService.getAll();
	}

	@Get(':id')
	@ApiResponse({ status: HttpStatusCodes.OK, description: 'The query was fulfilled successfully'})
	@ApiResponse({ status: HttpStatusCodes.NOT_FOUND, description: 'The given ID was not found'})
	@ApiResponse({ status: HttpStatusCodes.INTERNAL_SERVER_ERROR, description: 'An error occured'})
	async getClassById(@Param('id') id): Promise<Class> {
		return this.classesService.getById(id);
	}

}

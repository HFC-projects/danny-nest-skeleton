import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { Class } from './interfaces/class.interface';

@Controller('Classes')
export class ClassesController {
	constructor(private readonly classesService: ClassesService) { }

	@Get()
	getAllClasses(): Promise<Class[]> {
		return this.classesService.getAll();
	}

	@Get(':id')
	async getClassById(@Param('id') id): Promise<Class> {
		return this.classesService.getById(id);
	}

}

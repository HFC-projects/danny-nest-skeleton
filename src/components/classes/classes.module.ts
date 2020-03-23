import { Module } from '@nestjs/common';
import { ClassesController } from './classes.controller';
import { ClassesService } from './classes.service';
import { classesProviders } from './classes.provider';
import { DatabaseModule } from '../../database/database.module';

@Module({
	imports: [DatabaseModule],
	controllers: [ClassesController],
	providers: [
		ClassesService,
		...classesProviders,
	],
})
export class ClassesModule { }
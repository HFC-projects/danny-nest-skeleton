import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeachersModule } from '../teachers/teachers.module';
import { StudentsModule } from '../students/students.module';
import { ClassesModule } from '../classes/classes.module';

@Module({
	imports: [TeachersModule, StudentsModule, ClassesModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }

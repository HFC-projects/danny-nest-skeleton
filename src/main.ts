import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './components/app/app.module';
import { HttpExceptionFilter } from './filters/httpException.filter';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalFilters(new HttpExceptionFilter);

	const options = new DocumentBuilder()
		.setTitle('danny-nest-skeleton')
		.setDescription('This is a prototype API')
		.setVersion('1.0')
		.build();
	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('', app, document);

	await app.listen(3000);
}
bootstrap();

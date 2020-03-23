import * as mongoose from 'mongoose';

export const databaseProviders = [
	{
		provide: 'DATABASE_CONNECTION',
		useFactory: (): Promise<typeof mongoose> =>
			mongoose.connect('mongodb+srv://danny:danny@cluster0-lb136.mongodb.net/skeleton-test?retryWrites=true&w=majority')
	},
];
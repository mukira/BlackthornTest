import { createConnection } from 'typeorm';
import { DB_URL } from '../config';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: `postgres`,
      url: process.env.DATABASE_URL || DB_URL,
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
      ssl: true,
    }),
  },
];

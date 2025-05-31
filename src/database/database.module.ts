import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from '../users/entities/user.entity';
import { Challenge } from '../challenges/entities/challenge.entity';
import { Submission } from '../submissions/entities/submission.entity';
import { Badge } from '../badges/entities/badge.entity';

@Module({
  imports: [
    ConfigModule, // Make sure ConfigModule is imported
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Needed for ConfigService
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const databaseUrl = configService.get<string>('DATABASE_URL');
        const isProd = configService.get('NODE_ENV') === 'production';
      
        if (databaseUrl) {
          return {
            type: 'postgres',
            url: databaseUrl,
            entities: [User, Challenge, Submission, Badge],
            synchronize: !isProd,
            logging: !isProd,
            ssl: {
              rejectUnauthorized: false,
            },
            extra: {
              ssl: {
                rejectUnauthorized: false,
              },
              family: 4,
            },
          };
        }
      
        // Fallback for local development
        return {
          type: 'postgres',
          host: configService.get<string>('DB_HOST'),
          port: +configService.get('DB_PORT'),
          username: configService.get<string>('DB_USERNAME'),
          password: configService.get<string>('DB_PASSWORD'),
          database: configService.get<string>('DB_DATABASE'),
          entities: [User, Challenge, Submission, Badge],
          synchronize: !isProd,
          logging: !isProd,
          extra: {
            family: 4,
          },
        };
      }
      
    }),
  ],
})
export class DatabaseModule {}

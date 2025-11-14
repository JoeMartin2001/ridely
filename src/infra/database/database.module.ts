import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { supabaseDbConfig } from './supabase-db.config';
// import { typeOrmConfig } from './typeorm.config.ts';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        // return typeOrmConfig(configService);
        return supabaseDbConfig(configService);
      },
    }),
  ],
})
export class DatabaseModule {}

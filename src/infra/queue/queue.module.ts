import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    BullModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const host = config.get<string>('REDIS_HOST', 'localhost');
        const port = config.get<number>('REDIS_PORT', 6379);
        const password = config.get<string>('REDIS_PASSWORD');
        const db = config.get<number>('REDIS_DB', 0);
        const prefix = config.get<string>('QUEUE_PREFIX', 'app');

        return {
          redis: {
            host,
            port,
            password,
            db,
          },
          prefix, // all queue keys will use this prefix in Redis
        };
      },
    }),
  ],
  exports: [BullModule],
})
export class QueueModule {}

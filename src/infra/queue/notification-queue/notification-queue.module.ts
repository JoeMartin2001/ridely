import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { QueueModule } from 'src/infra/queue/queue.module';
import { LoggerModule } from 'src/infra/logger/logger.module';
import { NotificationQueueService } from './notification-queue.service';
import {
  NOTIFICATION_QUEUE,
  NotificationProcessor,
} from './notification.processor';

@Module({
  imports: [
    QueueModule,
    LoggerModule,
    BullModule.registerQueue({
      name: NOTIFICATION_QUEUE,
    }),
  ],
  providers: [NotificationQueueService, NotificationProcessor],
  exports: [NotificationQueueService],
})
export class NotificationQueueModule {}

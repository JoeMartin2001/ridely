import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsResolver } from './notifications.resolver';
import { NotificationQueueModule } from 'src/infra/queue/notification-queue/notification-queue.module';
import { LoggerModule } from 'src/infra/logger/logger.module';

@Module({
  imports: [NotificationQueueModule, LoggerModule],
  providers: [NotificationsResolver, NotificationsService],
})
export class NotificationsModule {}

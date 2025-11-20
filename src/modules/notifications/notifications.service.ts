import { Injectable } from '@nestjs/common';
import { CreateNotificationInput } from './dto/create-notification.input';
import { UpdateNotificationInput } from './dto/update-notification.input';
import { NotificationQueueService } from 'src/infra/queue/notification-queue/notification-queue.service';

@Injectable()
export class NotificationsService {
  constructor(
    private readonly notificationQueueService: NotificationQueueService,
  ) {}

  async sendEmailNotification(email: string, template: string, payload: any) {
    await this.notificationQueueService.enqueue({
      type: 'send-email',
      to: email,
      template,
      payload,
    });
  }

  async sendSmsNotification(phone: string, text: string) {
    await this.notificationQueueService.enqueue({
      type: 'send-sms',
      phone,
      text,
    });
  }

  create(createNotificationInput: CreateNotificationInput) {
    return 'This action adds a new notification';
  }

  findAll() {
    return `This action returns all notifications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notification`;
  }

  update(id: number, updateNotificationInput: UpdateNotificationInput) {
    return `This action updates a #${id} notification`;
  }

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}

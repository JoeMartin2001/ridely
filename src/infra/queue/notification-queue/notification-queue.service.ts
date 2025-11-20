import type { Queue } from 'bull';
import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { NOTIFICATION_QUEUE } from './notification.processor';

export type NotificationJobType = 'send-email' | 'send-sms' | 'send-telegram';

export interface SendEmailJob {
  type: 'send-email';
  to: string;
  template: string;
  payload: Record<string, any>;
}

export interface SendSmsJob {
  type: 'send-sms';
  phone: string;
  text: string;
}

export type NotificationJob = SendEmailJob | SendSmsJob;

@Injectable()
export class NotificationQueueService {
  constructor(
    @InjectQueue(NOTIFICATION_QUEUE)
    private readonly notificationQueue: Queue<NotificationJob>,
  ) {}

  async enqueue(job: NotificationJob) {
    return this.notificationQueue.add(job.type, job, {
      attempts: 3,
      backoff: { type: 'exponential', delay: 5_000 },
      removeOnComplete: true,
      removeOnFail: false,
    });
  }
}

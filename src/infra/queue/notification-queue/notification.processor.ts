import bull from 'bull';
import { Process, Processor } from '@nestjs/bull';
import { AppLogger } from 'src/infra/logger/app-logger.service'; // if you wired logger
import { NotificationJob } from './notification-queue.service';

export const NOTIFICATION_QUEUE = 'notification';

@Processor(NOTIFICATION_QUEUE)
export class NotificationProcessor {
  constructor(private readonly logger: AppLogger) {}

  @Process('send-email')
  async handleSendEmail(job: bull.Job<NotificationJob>) {
    const data = job.data;
    this.logger.log({
      msg: 'Processing send-email job',
      queue: NOTIFICATION_QUEUE,
      jobId: job.id,
      to: (data as any).to,
      template: (data as any).template,
    });

    // TODO: call your email-client module here
  }

  @Process('send-sms')
  async handleSendSms(job: bull.Job<NotificationJob>) {
    const data = job.data;
    this.logger.log({
      msg: 'Processing send-sms job',
      queue: NOTIFICATION_QUEUE,
      jobId: job.id,
      phone: (data as any).phone,
    });

    // TODO: call your phone-otp / sms client here
  }
}

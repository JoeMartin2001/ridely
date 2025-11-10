import { Module } from '@nestjs/common';
import { EmailOTPService } from './email-otp.service';
import { EmailClientModule } from '../email-client/email-client.module';

@Module({
  providers: [EmailOTPService],
  exports: [EmailOTPService],
  imports: [EmailClientModule],
})
export class EmailOTPModule {}

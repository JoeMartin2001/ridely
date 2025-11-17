import { Module } from '@nestjs/common';
import { RideRulesService } from './ride-rules.service';
import { RideRulesResolver } from './ride-rules.resolver';

@Module({
  providers: [RideRulesResolver, RideRulesService],
})
export class RideRulesModule {}

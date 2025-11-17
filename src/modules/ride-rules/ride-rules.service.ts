import { Injectable } from '@nestjs/common';
import { CreateRideRuleInput } from './dto/create-ride-rule.input';
import { UpdateRideRuleInput } from './dto/update-ride-rule.input';

@Injectable()
export class RideRulesService {
  create(createRideRuleInput: CreateRideRuleInput) {
    return 'This action adds a new rideRule';
  }

  findAll() {
    return `This action returns all rideRules`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rideRule`;
  }

  update(id: number, updateRideRuleInput: UpdateRideRuleInput) {
    return `This action updates a #${id} rideRule`;
  }

  remove(id: number) {
    return `This action removes a #${id} rideRule`;
  }
}

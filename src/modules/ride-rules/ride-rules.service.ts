import { Injectable } from '@nestjs/common';
import { CreateRideRuleInput } from './dto/create-ride-rule.input';
import { UpdateRideRuleInput } from './dto/update-ride-rule.input';
import { Repository } from 'typeorm';
import { RideRule } from './entities/ride-rule.entity';

@Injectable()
export class RideRulesService {
  constructor(private readonly rideRuleRepository: Repository<RideRule>) {}

  create(createRideRuleInput: CreateRideRuleInput) {
    return this.rideRuleRepository.save(createRideRuleInput);
  }

  findAll() {
    return this.rideRuleRepository.find();
  }

  findOne(id: string) {
    return this.rideRuleRepository.findOne({ where: { id } });
  }

  update(id: string, updateRideRuleInput: UpdateRideRuleInput) {
    return this.rideRuleRepository.update(id, updateRideRuleInput);
  }

  remove(id: string) {
    return this.rideRuleRepository.delete(id);
  }
}

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RideRulesService } from './ride-rules.service';
import { RideRule } from './entities/ride-rule.entity';
import { CreateRideRuleInput } from './dto/create-ride-rule.input';
import { UpdateRideRuleInput } from './dto/update-ride-rule.input';

@Resolver(() => RideRule)
export class RideRulesResolver {
  constructor(private readonly rideRulesService: RideRulesService) {}

  @Mutation(() => RideRule)
  createRideRule(
    @Args('createRideRuleInput') createRideRuleInput: CreateRideRuleInput,
  ) {
    return this.rideRulesService.create(createRideRuleInput);
  }

  @Query(() => [RideRule], { name: 'rideRules' })
  findAll() {
    return this.rideRulesService.findAll();
  }

  @Query(() => RideRule, { name: 'rideRule' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.rideRulesService.findOne(id);
  }

  @Mutation(() => RideRule)
  updateRideRule(
    @Args('updateRideRuleInput') updateRideRuleInput: UpdateRideRuleInput,
  ) {
    return this.rideRulesService.update(
      updateRideRuleInput.id,
      updateRideRuleInput,
    );
  }

  @Mutation(() => RideRule)
  removeRideRule(@Args('id', { type: () => String }) id: string) {
    return this.rideRulesService.remove(id);
  }
}

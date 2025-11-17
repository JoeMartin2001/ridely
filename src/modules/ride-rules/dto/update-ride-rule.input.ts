import { CreateRideRuleInput } from './create-ride-rule.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRideRuleInput extends PartialType(CreateRideRuleInput) {
  @Field(() => ID)
  id!: string;
}

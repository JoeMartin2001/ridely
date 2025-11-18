import { InputType, Field } from '@nestjs/graphql';
import { IRideRule, RuleType } from 'src/common/interfaces';

@InputType()
export class CreateRideRuleInput implements Partial<IRideRule> {
  @Field(() => String)
  description!: string;

  @Field(() => RuleType)
  type!: RuleType;
}

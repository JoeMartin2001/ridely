import { InputType, Field } from '@nestjs/graphql';
import { RuleType } from 'src/common/interfaces';

@InputType()
export class CreateRideRuleInput {
  @Field(() => String)
  description!: string;

  @Field(() => RuleType)
  type!: RuleType;
}

import { registerEnumType } from '@nestjs/graphql';

export interface IRideRule {
  id: string;
  description: string;
  type: RuleType;
}

export enum RuleType {
  SMOKING = 'smoking',
  PETS = 'pets',
  MUSIC = 'music',
  LUGGAGE = 'luggage',
  OTHER = 'other',
}

registerEnumType(RuleType, {
  name: 'RuleType',
  description: 'Types of ride rules',
});

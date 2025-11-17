import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IRideRule, RuleType } from 'src/common/interfaces/RideRule';
import { TableName } from 'src/common/constants/TableName';

@ObjectType()
@Entity(TableName.RIDE_RULES)
export class RideRule implements IRideRule {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field(() => String)
  @Column({ type: 'varchar', length: 255 })
  description!: string;

  @Field(() => RuleType)
  @Column({ type: 'enum', enum: RuleType })
  type!: RuleType;
}

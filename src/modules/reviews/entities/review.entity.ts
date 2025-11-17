import {
  ObjectType,
  Field,
  ID,
  Int,
  GraphQLISODateTime,
} from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IReview, ReviewType } from 'src/common/interfaces';
import { TableName } from 'src/common/constants/TableName';

@ObjectType()
@Entity(TableName.REVIEWS)
export class Review implements IReview {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field(() => String)
  @Column({ type: 'uuid' })
  bookingId!: string;

  @Field(() => String)
  @Column({ type: 'varchar', length: 255 })
  message!: string;

  @Field(() => String)
  @Column({ type: 'uuid' })
  rideId!: string;

  @Field(() => String)
  @Column({ type: 'uuid' })
  reviewerId!: string;

  @Field(() => String)
  @Column({ type: 'uuid' })
  reviewedId!: string;

  @Field(() => ReviewType)
  @Column({ type: 'enum', enum: ReviewType })
  type!: ReviewType;

  @Field(() => Int)
  @Column({ type: 'int' })
  rating!: number;

  @Field(() => String, { nullable: true })
  @Column({ type: 'varchar', length: 255, nullable: true })
  comment?: string;

  @Field(() => GraphQLISODateTime)
  @Column({ type: 'timestamptz', default: new Date() })
  createdAt!: Date;
}

import { IRegion } from 'src/common/interfaces';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TableName } from 'src/common/constants/TableName';

@ObjectType()
@Entity(TableName.REGIONS)
export class RegionEntity implements IRegion {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field(() => Int)
  @Column({ type: 'int' })
  old_int_id!: number;

  @Field(() => String)
  @Column({ type: 'varchar' })
  soato_id!: string;

  @Field(() => String)
  @Column({ type: 'varchar' })
  name_uz!: string;

  @Field(() => String)
  @Column({ type: 'varchar' })
  name_ru!: string;

  @Field(() => String)
  @Column({ type: 'varchar' })
  name_oz!: string;
}

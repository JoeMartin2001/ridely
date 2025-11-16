import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { TableName } from 'src/common/constants/TableName';
import { IDistrict } from 'src/common/interfaces';
import { RegionEntity } from 'src/modules/regions/entities/region.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity(TableName.DISTRICTS)
export class DistrictEntity implements IDistrict {
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

  @Index()
  @Column({ type: 'uuid', name: 'region_id' })
  region_id!: string;

  @ManyToOne(() => RegionEntity, {
    onDelete: 'CASCADE',
    createForeignKeyConstraints: true,
  })
  @JoinColumn({ name: 'region_id', referencedColumnName: 'id' })
  region!: RegionEntity;
}

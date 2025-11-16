import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DistrictEntity } from './entites/district.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DistrictEntity])],
  exports: [TypeOrmModule],
})
export class DistrictsModule {}

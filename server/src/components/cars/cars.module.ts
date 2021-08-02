import { Module } from '@nestjs/common';
import { CarsResolver } from './cars.resolver';
import { CarsService } from './cars.service';

@Module({
  imports: [],
  providers: [CarsService, CarsResolver],
  exports: [CarsService],
})
export class CarsModule {}

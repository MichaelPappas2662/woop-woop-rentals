import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';

@Module({
  imports: [],
  providers: [CarsService],
  exports: [CarsService],
})
export class CarsModule {}

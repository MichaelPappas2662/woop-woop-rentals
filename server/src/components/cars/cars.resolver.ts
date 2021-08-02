/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { NewCarInput } from './dto/new-car.input';
import { Car } from './entities/car';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((_returns) => [Car])
  public async cars(): Promise<Car[]> {
    return await this.carsService.getAllCars().catch((err) => {
      throw err;
    });
  }

  @Mutation((_returns) => Car)
  public async addNewCar(
    @Args('newCarData') newCarData: NewCarInput,
  ): Promise<Car> {}
}

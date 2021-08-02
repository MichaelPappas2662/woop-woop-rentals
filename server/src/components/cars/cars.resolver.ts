import { Resolver, Query } from '@nestjs/graphql';
import { CarsService } from './cars.service';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => String)
  public async cars() {
    return 'Hello and welcome to Woop Woop Rentals shop!';
  }
}

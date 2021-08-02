import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './entities/car';

@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {}

  public async getAllCars(): Promise<Car[]> {
    return await this.carRepository.find({}).catch((err) => {
      throw new InternalServerErrorException();
    });
  }
}

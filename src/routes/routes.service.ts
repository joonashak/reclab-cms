import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Route } from './route.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoutesService {
  constructor(
    @InjectRepository(Route)
    private readonly routesRepository: Repository<Route>,
  ) {}

  async findOne(path: string): Promise<Route> {
    return this.routesRepository.findOne({ path });
  }
}

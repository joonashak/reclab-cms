import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Page } from '../pages/page.entity';
import { Connection, Repository } from 'typeorm';
import { Route } from '../routes/route.entity';
import pagesSeed from "./data/pages.seed";
import routesSeed from "./data/routes.seed";

const protect = () => {
  if (process.env.NODE_ENV === 'production') {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
};

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(Page)
    private readonly pagesRepository: Repository<Page>,
    @InjectRepository(Route)
    private readonly routesRepository: Repository<Route>,
    private connection: Connection,
  ) {}

  async clear(): Promise<void> {
    protect();
    await this.connection.dropDatabase();
    await this.connection.synchronize();
  }

  async seed(): Promise<void> {
    protect();
    await this.pagesRepository.save(pagesSeed);
    await this.routesRepository.save(routesSeed);
  }
}

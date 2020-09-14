import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Page } from '../pages/page.entity';
import { Connection, Repository } from 'typeorm';
import { Route } from '../routes/route.entity';

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
    await this.pagesRepository.save({
      id: 'b69ed738-5e02-47f4-8180-a1dd4611b7f7',
      title: 'as',
      content: 'd',
      updatedAt: new Date(),
    });

    await this.routesRepository.save({
      path: '/asd',
      page: {
        id: 'b69ed738-5e02-47f4-8180-a1dd4611b7f7',
      },
    });
  }
}

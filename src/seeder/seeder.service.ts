import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Page } from '../pages/page.entity';
import { Route } from '../routes/route.entity';
import { User } from '../users/user.entity';
import pagesSeed from './data/pages.seed';
import routesSeed from './data/routes.seed';
import usersSeed from './data/users.seed';
import { Language } from '../languages/language.entity';
import languageSeed from './data/language.seed';

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
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(Language)
    private readonly languageRepository: Repository<Language>,
    private connection: Connection,
  ) {}

  async clear(): Promise<void> {
    protect();
    await this.connection.dropDatabase();
    await this.connection.synchronize();
  }

  async seed(): Promise<void> {
    protect();
    await this.usersRepository.save(usersSeed);
    await this.languageRepository.save(languageSeed);
    await this.pagesRepository.save(pagesSeed);
    await this.routesRepository.save(routesSeed);
  }
}

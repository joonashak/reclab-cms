import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Page } from 'src/pages/page.entity';
import { Connection, Repository } from 'typeorm';

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
      title: 'as',
      content: 'd',
      updatedAt: new Date(),
    });
  }
}

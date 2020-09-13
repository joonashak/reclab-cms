import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Page } from 'src/pages/page.entity';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(Page)
    private readonly pagesRepository: Repository<Page>,
    private connection: Connection,
  ) {}

  async clear(): Promise<void> {
    if (process.env.NODE_ENV === 'production') {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }

    await this.connection.dropDatabase();
    await this.connection.synchronize();
  }
}

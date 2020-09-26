import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Page } from './page.entity';

@Injectable()
export class PagesService {
  constructor(
    @InjectRepository(Page)
    private readonly pagesRepository: Repository<Page>,
  ) {}

  async findOne(id: string): Promise<Page> {
    return this.pagesRepository.findOne(id);
  }

  async findAll(): Promise<Page[]> {
    return this.pagesRepository.find();
  }

  async findAllPublic(): Promise<Page[]> {
    return this.pagesRepository.find();
  }
}

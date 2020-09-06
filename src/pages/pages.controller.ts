import { Controller, Get, Param } from '@nestjs/common';
import { PagesService } from './pages.service';
import { Page } from './page.entity';

@Controller('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Page> {
    return this.pagesService.findOne(id);
  }

  @Get()
  findAll(): Promise<Page[]> {
    return this.pagesService.findAll();
  }
}

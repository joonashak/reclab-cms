import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeederService } from './seeder.service';
import { SeederController } from './seeder.controller';
import { Page } from '../pages/page.entity';
import { Route } from '../routes/route.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Page, Route])],
  providers: [SeederService],
  controllers: [SeederController],
})
export class SeederModule {}

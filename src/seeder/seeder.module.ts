import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeederService } from './seeder.service';
import { SeederController } from './seeder.controller';
import { Page } from '../pages/page.entity';
import { Route } from '../routes/route.entity';
import { User } from '../users/user.entity';
import { Language } from '../languages/language.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Page, Route, User, Language])],
  providers: [SeederService],
  controllers: [SeederController],
})
export class SeederModule {}

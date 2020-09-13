import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeederService } from './seeder.service';
import { SeederController } from './seeder.controller';
import { Page } from 'src/pages/page.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Page])],
  providers: [SeederService],
  controllers: [SeederController],
})
export class SeederModule {}

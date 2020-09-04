import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Route } from "./route.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Route])],
  providers: [RoutesService],
  controllers: [RoutesController]
})
export class RoutesModule {}

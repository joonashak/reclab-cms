import { Controller, Get } from '@nestjs/common';
import { SeederService } from "./seeder.service";

@Controller('seeder')
export class SeederController {
  constructor(private readonly seederService: SeederService) {}

  @Get('clear')
  clear(): Promise<void> {
    return this.seederService.clear();
  }
}

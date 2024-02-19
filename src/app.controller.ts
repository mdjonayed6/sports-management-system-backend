import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('sports')
  findAll(): string {
    return this.appService.getSports();
  }

  @Get('myname')
  findMyName(): string {
    return this.appService.getMyName();
  }
}

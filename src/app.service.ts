import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
  getSports(): string {
    return 'All Sport Get';
  }

  getMyName(): string {
    return 'Hello Vatija, My Name is Jonayed';
  }
}

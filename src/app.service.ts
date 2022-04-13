import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSomething(): string {
    return 'Here is How Services return some data using routes ';
  }
  
}

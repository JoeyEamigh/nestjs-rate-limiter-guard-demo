import { Controller, Get, UseGuards } from '@nestjs/common';
import { RateLimit, RateLimiterGuard } from 'nestjs-rate-limiter';

@Controller()
export class AppController {
  @UseGuards(RateLimiterGuard)
  @RateLimit({
    points: 1,
    duration: 10,
  })
  @Get()
  getHello(): { message: string } {
    return { message: 'Hello World' };
  }
}

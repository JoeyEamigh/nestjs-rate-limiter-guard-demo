import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { RateLimiterModule } from 'nestjs-rate-limiter';

@Module({
  imports: [RateLimiterModule.register({ keyPrefix: 'guard-demo' })],
  controllers: [AppController],
})
export class AppModule {}

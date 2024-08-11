import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogsGateway } from './logs/logs.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, LogsGateway],
})
export class AppModule {}

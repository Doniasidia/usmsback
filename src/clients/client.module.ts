import { Module } from '@nestjs/common';
import { StatisticsModule } from '../statistics/statistics.module';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';

@Module({
  imports: [StatisticsModule],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}

import { Injectable } from '@nestjs/common';
import { StatisticsService } from '../statistics/statistics.service';

@Injectable()
export class ClientService {
  constructor(private readonly statisticsService: StatisticsService) {}

  getClientStatistics(): string {
    // You can call the statistics service to fetch statistics here
    return this.statisticsService.getStatistics();
  }
}

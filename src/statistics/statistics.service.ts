import { Injectable } from '@nestjs/common';

@Injectable()
export class StatisticsService {
  getStatistics(): string {
    // Logic to fetch and return statistics
    return 'Some statistics data';
  }
}

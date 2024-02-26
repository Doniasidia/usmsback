import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getDatabaseUser(): string {
    return this.configService.get('DATABASE_USER');
  }


  healthcheck(): string{
    return "app is running"
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user';
import { Calendar } from './entity/calendar';
import { Invoice } from './entity/invoice';
import { Message } from './entity/message';
import { Payment } from './entity/payment';
import { Subplan } from './entity/subplan';
import { Subscription } from './entity/subscription';
import { Sessions } from './entity/sessions';
import { StatisticsModule } from './statistics/statistics.module'; // Import the StatisticsModule

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [User, Calendar, Invoice, Message, Payment, Sessions, Subplan, Subscription],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    StatisticsModule, // Include the StatisticsModule in the imports array
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

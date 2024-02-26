import { Module, Session } from '@nestjs/common';
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
import { Subscription } from 'rxjs';
import { Sessions } from './entity/sessions';


@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres' , // Replace with your database type (e.g., 'mysql')
        host: configService.get('DATABASE_HOST'), 
        port: configService.get('DATABASE_PORT'), 
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'), // Replace with your database name
        entities: [User,Calendar,Invoice,Message,Payment,Sessions
          ,Subplan,Subscription], // List your entities here
        synchronize: true, // Set to false in production for safety
      }),
      inject: [ConfigService],
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

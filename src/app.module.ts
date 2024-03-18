import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Calendar } from 'src/entity/calendar';
import { Invoice } from 'src/entity/invoice';
import { Message } from 'src/entity/message';
import { Payment } from 'src/entity/payment';
import { Subplan } from 'src/entity/subplan';
import { Subscription } from 'src/entity/subscription';
import { Sessions } from 'src/entity/sessions';
import { Subscriber } from 'src/entity/subscriber';
import { Client } from 'src/entity/client';
import { Admin } from 'src/entity/admin';
import { User } from 'src/entity/user';
import { LoginCredentials } from 'src/entity/LoginCredentials';
import { UserController } from './controllers/user.controller';
import { UserService } from './entity/user.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [
          Calendar,
          Invoice,
          Message,
          Payment,
          Sessions,
          Subplan,
          Subscription,
          Subscriber,
          Client,
          Admin,
          User, LoginCredentials
        ],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController ,UserController],
  providers: [AppService,UserService],
})
export class AppModule {}

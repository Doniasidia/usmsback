import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';

@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Get()
  getAllSubscriptions(): string[] {
    return this.subscriptionService.getAllSubscriptions();
  }

  @Post()
  createSubscription(@Body() subscriptionDetails: any): string {
    return this.subscriptionService.createSubscription(subscriptionDetails);
  }

  @Delete(':id')
  cancelSubscription(@Param('id') subscriptionId: string): string {
    return this.subscriptionService.cancelSubscription(subscriptionId);
  }
}

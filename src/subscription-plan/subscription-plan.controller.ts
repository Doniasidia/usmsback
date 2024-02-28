import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { SubscriptionPlanService } from './subscription-plan.service';

@Controller('subscription-plans')
export class SubscriptionPlanController {
  constructor(private readonly subscriptionPlanService: SubscriptionPlanService) {}

  @Get()
  getAllSubscriptionPlans(): string[] {
    return this.subscriptionPlanService.getAllSubscriptionPlans();
  }

  @Post()
  createSubscriptionPlan(@Body() subscriptionPlanDetails: any): string {
    return this.subscriptionPlanService.createSubscriptionPlan(subscriptionPlanDetails);
  }

  @Put(':id')
  updateSubscriptionPlan(@Param('id') subscriptionPlanId: string, @Body() subscriptionPlanDetails: any): string {
    return this.subscriptionPlanService.updateSubscriptionPlan(subscriptionPlanId, subscriptionPlanDetails);
  }

  @Delete(':id')
  deleteSubscriptionPlan(@Param('id') subscriptionPlanId: string): string {
    return this.subscriptionPlanService.deleteSubscriptionPlan(subscriptionPlanId);
  }
}

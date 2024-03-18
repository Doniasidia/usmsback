// user.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { Client } from 'src/entity/client';
import { ClientService } from './client.service';
// import { CreateUserDto, UpdateUserDto } from '../dto/user.dto'; 
// import { AdminGuard } from 'src/guards/adminguards';
// @UseGuards(AdminGuard)
@Controller('api/clients')
export class ClientController {

  constructor(private readonly userService: ClientService) {}

  @Get()
  getAllUsers(): Client[] {
    // return []
    return this.userService.findAllUsers();
  }

  // @Get(':id')
  // getUserById(@Param('id') id: string): User {
  //   return this.userService.findUserById(+id);
  // }

  @Post()
  createUser(@Body() user: Client): Client {
    return this.userService.createUser(user);
  }

  // @Put(':id')
  // updateUser(@Param('id') id: string, @Body() updatedUser: User): User {
  //   return this.userService.updateUser(+id, updatedUser);
  // }

  // @Delete(':id')
  // deleteUser(@Param('id') id: string): void {
  //   this.userService.deleteUser(+id);
  // }
}
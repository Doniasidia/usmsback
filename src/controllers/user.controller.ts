// user.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { User } from '../entity/user'; 
import { UserService } from '../entity/user.service';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers(): User[] {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): User {
    return this.userService.findUserById(+id);
  }

  @Post()
  createUser(@Body() user: User): User {
    return this.userService.createUser(user);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updatedUser: User): User {
    return this.userService.updateUser(+id, updatedUser);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): void {
    this.userService.deleteUser(+id);
  }
}

// user.dto.ts
import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly username: string;

  @IsEmail()
  readonly email: string;
}

export class UpdateUserDto {
  @IsString()
  readonly username?: string;

  @IsEmail()
  readonly email?: string;
}

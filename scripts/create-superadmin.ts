// create-superadmin.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { UserService } from '../src/entity/user.service';
import { User } from '../src/entity/user';
import { Admin } from 'src/entity/admin';
import { Role } from 'src/enums/role';
import { LoginCredentials } from 'src/entity/LoginCredentials';


async function main() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    const userService = app.get(UserService);
    
    const superadmin: User = new User();
    superadmin.name = 'admin';
    const credentials = new LoginCredentials();
    credentials.hashedPassword = 'hashedPassword';
    credentials.salt = 'salt';
    superadmin.credentials = credentials;
    superadmin.role =  Role.ADMIN;
    superadmin.email = 'admin@example.com';
    credentials.tel_numb = '1234567890';
    superadmin.isAdmin = true;
    superadmin.isSuperAdmin = true;

    const createdSuperadmin = await userService.createSuperAdmin(superadmin); 

    console.log('Superadmin created:', createdSuperadmin);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await app.close();
  }
}

main();

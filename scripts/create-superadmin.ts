// create-superadmin.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module'; // Adjust the path as needed
import { UserService } from '../src/entity/user.service'; // Adjust the path as needed
import { User } from '../src/entity/user'; // Assuming the User entity is defined in user.ts

async function main() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    const userService = app.get(UserService);
    
    const superadmin: User = new User();
    superadmin.name = 'admin';
    superadmin.password = 'password';
    superadmin.role = 'admin';
    superadmin.email = 'admin@example.com';
    superadmin.telNumber = '1234567890';
    superadmin.isAdmin = true;
    superadmin.isSuperAdmin = true;
    // Set other properties as needed

    const createdSuperadmin = await userService.createSuperAdmin(superadmin);

    console.log('Superadmin created:', createdSuperadmin);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await app.close();
  }
}

main();

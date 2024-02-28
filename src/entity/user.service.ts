// user.service.ts
import { Injectable } from '@nestjs/common';
import { User } from './user'; // Assuming you have a User entity defined

@Injectable()
export class UserService {
  private users: User[] = [];

  createUser(user: User): User {
    // Logic to create a new user
    this.users.push(user);
    return user;
  }

  findAllUsers(): User[] {
    // Logic to fetch all users
    return this.users;
  }

  findUserById(id: number): User {
    // Logic to find a user by ID
    return this.users.find(user => user.id === id);
  }

  updateUser(id: number, updatedUser: User): User {
    // Logic to update a user
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...updatedUser };
      return this.users[index];
    }
    return null;
  }

  deleteUser(id: number): void {
    // Logic to delete a user
    this.users = this.users.filter(user => user.id !== id);
  }

  createSuperAdmin(superAdmin: User): User {
    // Logic to create a new superadmin
    // For example, you might set specific properties for superadmins
    superAdmin.isAdmin = true;
    superAdmin.isSuperAdmin = true;

    // Add the superadmin to the list of users
    this.users.push(superAdmin);

    return superAdmin;
  }
}

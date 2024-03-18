import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UserService {
  private users: User[] = []; // Initialize an empty array to store users

  createUser(user: User): User {
    // Logic to create a new user
    this.users.push(user); // Add the new user to the array
    return user; // Return the created user
  }

  findAllUsers(): User[] {
    // Logic to fetch all users
    return this.users; // Return the array of users
  }

  findUserById(id: number): User {
    // Logic to find a user by ID
    return this.users.find(user => user.id === id); // Find the user with the matching ID
  }

  updateUser(id: number, updatedUser: User): User {
    // Logic to update a user
    const index = this.users.findIndex(user => user.id === id); // Find the index of the user with the matching ID
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...updatedUser }; // Update the user's properties with the new values
      return this.users[index]; // Return the updated user
    }
    return null; // Return null if the user with the specified ID is not found
  }

  deleteUser(id: number): void {
    // Logic to delete a user
    this.users = this.users.filter(user => user.id !== id); // Filter out the user with the specified ID
  }

  createSuperAdmin(superAdmin: User): User {
  
    superAdmin.isAdmin = true; 
    superAdmin.isSuperAdmin = true; 

    this.users.push(superAdmin);

    return superAdmin; 
  }
}



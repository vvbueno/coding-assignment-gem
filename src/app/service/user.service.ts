import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { delay, tap } from "rxjs/operators";
import {User} from '../interface/user.interface';

/**
 * This service acts as a mock backend.
 *
 * You are free to modify it as you see.
 */
function randomDelay() {
  return Math.random() * 1000;
}

const CLIENT_ID: string = 'ae0bcc11-7fbc-4804-b33b-8d6308f83121';

@Injectable()
export class UserService {

  private users: User[] = [
    {
      username: 'mynormaluser@mail.com-ae0bcc11-7fbc-4804-b33b-8d6308f83121',
      clientId: 'ae0bcc11-7fbc-4804-b33b-8d6308f83121',
      email: 'mynormaluser@mail.com',
      familyName: 'Norman',
      firstName: 'Mark',
      profilePicture: 'mynormaluser@mail.com-ae0bcc11-7fbc-4804-b33b-8d6308f83121.jpeg',
      roles: ['user'],
    },
    {
      username: 'myadminuser@mail.com-ae0bcc11-7fbc-4804-b33b-8d6308f83121',
      clientId: 'ae0bcc11-7fbc-4804-b33b-8d6308f83121',
      email: 'myadminuser@mail.com',
      familyName: 'Adminson',
      firstName: 'John',
      profilePicture: 'myadminuser@mail.com@mail.com-ae0bcc11-7fbc-4804-b33b-8d6308f83121.jpeg',
      roles: ['admin','user'],
    }
  ]

  private getUserByUsername = (username: string) => {
    return this.users.find(user => user.username === username);
  }

  getUsers() {
    // Generate a random number between 0 and 1
    const randomValue = Math.random();

    // Check if the random value is less than 0.1 (10% chance)
    if (randomValue < 0.1) {
      // Throw an error with a custom message
      return throwError(() => new Error('An error occurred getting the users'));
    }
    return of(this.users.map( u => u)).pipe(delay(randomDelay()));
  }

  createUser(payload: { email: string, firstName: string, familyName: string }) {
    const username = `${payload.email}-${CLIENT_ID}`;
    const newUser: User = {
      username,
      clientId: CLIENT_ID,
      email: payload.email,
      familyName: payload.familyName,
      firstName: payload.firstName,
      profilePicture: `${username}.jpeg`,
      roles: ['user']
    };
    this.users = this.users.concat(newUser);
    return of(newUser).pipe(delay(randomDelay()));
  }

  update(username: string, updates: Partial<Omit<User, "username">>) {
    const foundUser = this.getUserByUsername(username);

    if (!foundUser) {
      return throwError(() => new Error("User not found"));
    }

    const updatedUser = { ...foundUser, ...updates };

    this.users = this.users.map(u =>
      u.username === username ? updatedUser : u
    );

    return of(updatedUser).pipe(delay(randomDelay()));
  }
}

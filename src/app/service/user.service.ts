import { Injectable } from "@angular/core";
import { of, throwError } from "rxjs";
import { delay } from "rxjs/operators";
import {User} from '../interface/user.interface';

/**
 * This service acts as a mock backend.
 * You are free to modify it as you see.
 */
function randomDelay() {
  return Math.random() * 1000;
}

// random client id just to simulate it
const CLIENT_ID: string = 'ae0bcc11-7fbc-4804-b33b-8d6308f83121';

@Injectable()
export class UserService {

  private users: User[] = [
    {
      username: 'mynormaluser',
      clientId: CLIENT_ID,
      email: 'mynormaluser@mail.com',
      familyName: 'Norman',
      firstName: 'Mark',
    },
    {
      username: 'myadminuser',
      clientId: CLIENT_ID,
      email: 'myadminuser@mail.com',
      familyName: 'Adminson',
      firstName: 'John',
    },
    {
      username: 'mythirduser',
      clientId: CLIENT_ID,
      email: 'mythirduser@mail.com',
      familyName: 'Webstern',
      firstName: 'Gale',
    }
  ]

  /**
   * PRIVATE (don't change accessibility) Get a user from the users list based on the username
   */
  private getUserByUsername = (username: string) => {
    return this.users.find(user => user.username === username);
  }

  /**
   * Returns an observable of the whole list of users
   */
  getUsers() {
    // Generate a random number between 0 and 1
    const randomValue = Math.random();
    // Check if the random value is less than 0.1 (10% chance)
    if (randomValue < 0.1) {
      // throw error to simulate random error
      return throwError(() => new Error('An error occurred getting the users'));
    }
    return of(this.users.map( u => u)).pipe(delay(randomDelay()));
  }

  /**
   * Returns an observable with a single user
   */
  getSingleUser(username: string) {
    const foundUser = this.getUserByUsername(username);
    if (!foundUser) {
      return throwError(() => new Error("User not found"));
    }
    return of(foundUser).pipe(delay(randomDelay()));
  }

  /**
   * Adds a new user to the user list, returns an observable of the user added
   */
  createUser(payload: { username: string, email: string, firstName: string, familyName: string }) {
    const newUser: User = {
      username: payload.username,
      clientId: CLIENT_ID,
      email: payload.email,
      familyName: payload.familyName,
      firstName: payload.firstName,
    };
    this.users = this.users.concat(newUser);
    return of(newUser).pipe(delay(randomDelay()));
  }

  /**
   * Update a user's property and returns it as an observable, modify if needed
   */
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

  /**
   * Removes a user from the user list based on the username, returns an observable of the updated user list
   */
  removeUser(username: string) {
    const index = this.users.findIndex(user => user.username === username);
    if (index !== -1) {
      const removedUser = this.users.splice(index, 1)[0];
      const updatedList = [...this.users];
      return of(updatedList).pipe(delay(randomDelay()));
    } else {
      return throwError(() => new Error(`User with username ${username} not found`));
    }
  }
}

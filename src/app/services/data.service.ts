import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];

  constructor() { 
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Phil',
        lastName: 'Johnson',
        email: 'phil@yahoo.com',
        isActive: false,
        registered: new Date('05/08/2019 12:05:00'),
        hide: true
      },
      {
        firstName: 'Jenny',
        lastName: 'Hill',
        email: 'jenny@hotmail.com',
        isActive: true,
        registered: new Date('06/20/2016 09:41:00'),
        hide: true
      }
    ];
  }

  getUsers(): User[] {
    console.log('Fetching users from service...')
    return this.users;
  }

  addUser(user : User) {
    this.users.unshift(user);
  }
}

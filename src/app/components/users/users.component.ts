import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
            street: '50 main street',
            city: 'Dun Laoghaire',
            state: 'Dublin'
        }
      },
      {
        firstName: 'Phil',
        lastName: 'Johnson',
        age: 33,
        address: {
            street: '55 small street',
            city: 'Bray',
            state: 'Wicklow'
        }
      },
      {
        firstName: 'Jenny',
        lastName: 'Hill',
        age: 25,
        address: {
            street: '45 Slow Street',
            city: 'Arklow',
            state: 'Wicklow'
        }
      }
    ];

      this.addUser({
        firstName: 'Frank',
        lastName: 'James',
        age: 44,
        address: {
            street: '65 High Street',
            city: 'Wexford Town',
            state: 'Wexford'
      }
    })
  }
  addUser(user: User) {
    this.users.push(user);
  }

}

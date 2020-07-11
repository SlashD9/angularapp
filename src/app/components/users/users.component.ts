import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: Boolean = true;
  loaded: Boolean = false;
  enableAdd:Boolean = true;

  constructor() { }

  ngOnInit() {
      this.users = [
            {
              firstName: 'John',
              lastName: 'Doe',
              age: 65,
              address: {
                  street: '50 main street',
                  city: 'Dun Laoghaire',
                  state: 'Dublin'
              },
              image: "http://lorempixel.com/600/600/people/3",
              isActive: true
            },
            {
              firstName: 'Phil',
              lastName: 'Johnson',
              age: 33,
              address: {
                  street: '55 small street',
                  city: 'Bray',
                  state: 'Wicklow'
              },
              image: "http://lorempixel.com/600/600/people/2",
              isActive: false
            },
            {
              firstName: 'Jenny',
              lastName: 'Hill',
              age: 25,
              address: {
                  street: '45 Slow Street',
                  city: 'Arklow',
                  state: 'Wicklow'
              },
              image: "http://lorempixel.com/600/600/people/1",
              isActive: true
            }
          ];

        this.loaded = true;

    // this.addUser({
    //   firstName: "David",
    //   lastName: "Jackson"
    // })
    
  }
  addUser(user: User) {
    this.users.push(user);
  }

}

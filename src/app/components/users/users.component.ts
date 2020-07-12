import { Component, OnInit } from '@angular/core';
// Imported interface/Object from User.ts 
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
    }


  }

  // Users Array
  users: User[];

  // Enable or disables show age and address
  showExtended: Boolean = true;

  // Shows loading message is loaded remains false
  loaded: Boolean = false;

  // Shows Add New Button if enabled
  enableAdd: Boolean = true;

  // Shows UserForm if true
  showUserForm: boolean = false;

  // This is an Object
  constructor() { }

  ngOnInit() {
    // Imported interface / Object that can be used to create users from User.ts
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
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
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
        isActive: false,
        registered: new Date('05/08/2019 12:05:00'),
        hide: true
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
        isActive: true,
        registered: new Date('06/20/2016 09:41:00'),
        hide: true
      }
    ];
    // Sets Loaded to true which displays the users and not the Loading message
    this.loaded = true;


  }

  // This Function adds user to the start of the users list, we could push it to the back using push 
  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();

    this.users.unshift(this.user);

    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: ''
      }
    }
  }

  // // Used to show or hide When toggle button is pressed
  // toggleHide(user: User) {
  //   user.hide = !user.hide;
  // }

  fireEvent(e) {
    console.log(e.type);
    console.log(e.target.value);
  }

  onSubmit(e) {
    console.log(123);
    e.preventDefault();
  }
}

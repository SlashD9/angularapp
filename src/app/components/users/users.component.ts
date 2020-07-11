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
  // This is an Object
  currentClasses = {};
  currentStyles = {}

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
    this.setCurrentClasses();
    this.setCurrentStyles();
    
  }

  // This Function adds user to the end of the users list, we could push it to the front using unshift 
  addUser(user: User) {
    this.users.push(user);
  }

  // This function controls the ngClass on the button by adding the class of btn-success if enableAdd is true
  // This also adds the css class of big text to the button if the show extended is enabled
  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top' : this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? ''  : '40px'
    }
  }
}

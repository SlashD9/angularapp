import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
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
    email: ''
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
  // Form 
  @ViewChild('userForm') form: any;

   
  // This is an Object
  constructor(private _dataService: DataService) { }

  ngOnInit() {

    this.users = this._dataService.getUsers();
 
    // Sets Loaded to true which displays the users and not the Loading message
    this.loaded = true;


  }

  // Here is where we submin our form, we need to check that the form is valid and also take in the value of User
  onSubmit({value, valid}: {value: User, valid: boolean}) {
    // Here we check the form is valid and if not we console.log the message
    if(!valid){
      console.log('Form is not valid');
    } 
    // Here we take the value of User and set some of the other values 
    else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      // we add the new user to the top of the list
      this._dataService.addUser(value);

      // we reset the form inputs to blank
      this.form.reset();
    }

  }
}

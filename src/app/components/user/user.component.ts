import { Component } from '@angular/core';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {
    // Properties
    firstName = 'John';
    lastName = 'Doe';
    age = 30;
    fullName;

    // Method
    constructor() {
        this.fullName = this.firstName + ' ' + this.lastName;
        return this.fullName;    
    }
    
 }

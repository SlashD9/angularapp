import { Component } from '@angular/core';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

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
    address = {
        street: '50 Main St',
        city: 'Boston',
        state: 'MA'
    };
    fullName;
    message;

    // Method
    constructor() {
        this.sayHello();  
        console.log(this.age);
        this.hasBirthday();
        console.log(this.age);
    }
    // Custom Methods
    sayHello() {
        this.message = 'Hello ' + this.firstName + ' ' + this.lastName;
    }

    hasBirthday() {
        this.age += 1;
    }
    
 }

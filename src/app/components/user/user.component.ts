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
    firstName: string = 'John';
    lastName: string = 'Doe';
    age: number = 30;
    address;

    // Method
    constructor() {
        this.firstName = 'John';
        this.lastName = 'Doe';
        this.age = 30;

        this.address = {
            street: '50 Main Street',
            city: 'Boston',
            state: 'MA'
        }
    }
    // Custom Methods
    sayHello() {
        this.message = 'Hello ' + this.firstName + ' ' + this.lastName;
    }

    showAge() {
        return this.age;
    }
    
 }

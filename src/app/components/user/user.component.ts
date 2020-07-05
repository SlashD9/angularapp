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
    user: {
        firstName: string,
        lastName: string,
        age: number,
        address: {
            street: string,
            city: string,
            state: string
        }
    }


    // Method
    constructor() {
        this.user = {
            firstName: 'John',
            lastName: 'Doe',
            age: 30,
            address: {
                street: '50 main street',
                city: 'Dun Laoghaire',
                state: 'Dublin'
            }
        }
    }
}
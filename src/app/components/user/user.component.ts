import { Component } from '@angular/core';

import { User } from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {
    // Properties
    user: User;
        

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


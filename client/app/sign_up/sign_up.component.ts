import { Component } from '@angular/core';
export class signup {
    firstname: string ;
    surname : string;
    username : string;
    password : string;
    confirm : string;
    email : string;
    telephone : string;
}
@Component({
    moduleId: module.id,
    selector: 'sign_up',
    templateUrl:'sign_up.component.html'

})
export class SignupComponent {
    clickT = false ;
    clickS = false;
    submitted = false;

    onSubmit() { this.submitted = true;

    }
    active = true;

    dateshow: signup = {
        firstname: '',
    surname : '',
    username : '',
    password : '',
    confirm : '',
    email : '',
    telephone : '',
    };
}

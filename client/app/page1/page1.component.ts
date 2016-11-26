import { Component } from '@angular/core';

export class form {
    fristname: string;
    lastname : string;
    grade : string;
    _id : string;

}

@Component({
    moduleId: module.id,
    selector: 'page1',
    templateUrl:'page1.component.html',
    styleUrls: ['page1.component.css']


})
export class Page1Component {

    click1 = false;

    onSubmit() {
        this.click1 = true;
    }
    active = true;

    inputForm : form = {
        fristname : '',
        lastname : '',
        grade : '',
        _id : ''
    };

}

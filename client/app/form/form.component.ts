import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'form',
    templateUrl: 'form.component.html',
    /*styleUrls: ['page2.component.css']*/

})
export class FormComponent {
    submitted = false;

    onSubmit() { this.submitted = true;

    }
    active = true;
}
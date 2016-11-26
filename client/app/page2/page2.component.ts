import { Component } from '@angular/core';

export class Date {
    date: string;
    timeStart : string;
    timeEnd : string;
}

@Component({
    moduleId: module.id,
    selector: 'page2',
    templateUrl: 'page2.component.html',
    /*styleUrls: ['page1.component.css']*/

})
export class Page2Component {

    dateshow: Date = {
        date : '-',
        timeStart : '-',
        timeEnd : '-'
    };
    submitted = false;
    click1 = false;

    onSubmit() { this.submitted = true;
        this.click1 = true;
    }
    active = true;

}

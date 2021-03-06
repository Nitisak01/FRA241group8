import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'techcomponent',
    templateUrl: 'tech.component.html'
})
export class techcomponent implements OnInit {
    constructor(public _router: Router) {
        var x = document.cookie.split(';');
        var cookievalue;
        var i =0;
        for(;i<x.length;i++){
            if(x[i].split('=')[0].trim() == 'sessionID'){
                cookievalue = x[i].split('=')[1];
                break;
            }
        }
        if(cookievalue === undefined){
            this._router.navigate(['']);
        }else {
            var res = atob(cookievalue).split('??');
            if (atob(res[0]) == 'teach' && atob(res[1]) == 'teach') {
                //admin
            } else {
                this._router.navigate(['']);
            }
        }
    }

    ngOnInit() { }

}
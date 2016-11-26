import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Cookie} from 'ng2-cookies';
@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl:'login.component.html'
})
export class logincomponent implements OnInit {
        data:Object = {
            username: " ",
            password: " ",
            checkk: " "
        };
 constructor(private _router: Router){}

    formSubmit(){
        var username = this.data.username;
        var password = this.data.password;
        var key = btoa(btoa(username)+'??'+btoa(password));
     console.log(this.data);
     console.log(key);
        document.cookie = "sessionID=" + key;
        // console.log(document.cookie)
     if(username == 'student'&& password == 'student'){
         this._router.navigate(['/search']);
     }else{
         if(username == 'teach'&& password == 'teach'){
             this._router.navigate(['/tech']);
         }else{
             this.data.checkk = false ;
             console.log('Who are you ?');
         }
     }
 }
    ngOnInit() {
        var username ='1';
        var password ='1';
            document.cookie = "sessionID=" + btoa(btoa(username)+'??'+btoa(password));
        console.log(document.cookie);
    }
}
import { NgModule }      from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { routing, appRoutingProviders }  from './app.routing';
import {HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {logincomponent} from "./login.component";
import {searchcomponent} from "./search.component";
import {techcomponent} from "./tech.component";
import { HighlightDirective } from './highlight.directive';

import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { FormComponent }  from './form/form.component';

import { Floor1Component } from './floor/floor1.component';
import { Floor2Component } from './floor/floor2.component';
import { Floor3Component } from './floor/floor3.component';
import { FloorseachComponent } from './floor/floorseach.component';
import {SignupComponent} from  "./sign_up/sign_up.component";
import {managebookComponent} from "./managebook/managebook.component";
import {FormtComponent} from "./formteacher/formt.component";
import {contactComponent} from "./Contact/contact.component";


@NgModule({
    imports:      [ BrowserModule,
                    FormsModule,
                    routing,
                    HttpModule],
    declarations: [ AppComponent,
                    logincomponent,
                    searchcomponent,
                    Page1Component,
                    Page2Component,
                    FormComponent,
                    FormtComponent,
                    SignupComponent,
                    techcomponent,
                    Floor1Component,
                    Floor2Component,
                    Floor3Component,
                    HighlightDirective,
                    FloorseachComponent,
                    managebookComponent,
                    contactComponent

    ],

    providers: [ appRoutingProviders],

    bootstrap:    [ AppComponent ]
})
export class AppModule { }

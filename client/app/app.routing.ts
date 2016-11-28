import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {logincomponent} from "./login.component";
import {searchcomponent} from "./search.component";
import {techcomponent} from "./tech.component";

import { FloorseachComponent } from './floor/floorseach.component';
import { Floor1Component } from './floor/floor1.component';
import { Floor2Component } from './floor/floor2.component';
import { Floor3Component } from './floor/floor3.component';

import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { FormComponent }  from './form/form.component';
import { SignupComponent }  from './sign_up/sign_up.component';
import {managebookComponent} from "./managebook/managebook.component";
import {FormtComponent} from "./formteacher/formt.component";
import {contactComponent} from "./Contact/contact.component";




const appRoutes: Routes = [
    { path: '', component: logincomponent },
    { path: 'contact', component: contactComponent },
    { path: 'managebookingroom', component: managebookComponent },
    { path: 'floorseach', component: FloorseachComponent },
    { path: 'login', component: logincomponent },
    { path: 'search', component: searchcomponent },
    { path: 'tech', component: techcomponent},
    { path: 'floorseach/floor1', component: Floor1Component },
    { path: 'floorseach/floor2', component: Floor2Component },
    { path: 'floorseach/floor3', component: Floor3Component },
    { path: 'signup', component: SignupComponent },
    { path: 'book', component: Page2Component },
    { path: 'book/form', component: Page1Component },
    { path: 'book/form/commitform', component: FormComponent },
    { path: 'book/form/commitform/formt', component: FormtComponent },

];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

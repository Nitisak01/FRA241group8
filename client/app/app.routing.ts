import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {logincomponent} from "./login.component";
import {searchcomponent} from "./search.component";
import {floorsearchcomponent} from "./floorsearch.component";
import {datesearchcomponent} from "./datesearch.component";
import {techcomponent} from "./tech.component";

import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { FormComponent }  from './form/form.component';

const appRoutes: Routes = [
    // { path: '', component: logincomponent },
    { path: 'login', component: logincomponent },
    { path: 'search', component: searchcomponent },
    { path: 'search/floor', component: floorsearchcomponent},
    { path: 'search/date', component: datesearchcomponent},
    { path: 'tech', component: techcomponent},
    { path: 'book', component: Page2Component },
    { path: 'book/form', component: Page1Component },
    { path: 'book/form/commitform', component: FormComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

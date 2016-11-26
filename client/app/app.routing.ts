import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {logincomponent} from "./login.component";
import {searchcomponent} from "./search.component";
import {floorsearchcomponent} from "./floorsearch.component";
import {datesearchcomponent} from "./datesearch.component";
import {techcomponent} from "./tech.component";

const appRoutes: Routes = [
    { path: '', component: logincomponent },
    { path: 'login', component: logincomponent },
    { path: 'search', component: searchcomponent },
    { path: 'search/floor', component: floorsearchcomponent},
    { path: 'search/date', component: datesearchcomponent},
    { path: 'tech', component: techcomponent}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { Component } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {
    AboutComponent,
    PortafolioComponent,
    ProductComponent
}from "./components/index.paginas";

const app_routes: Routes = [
    {path: 'routePath', component: PortafolioComponent},
    {path: 'about', component: AboutComponent},
    {path: 'product', component: ProductComponent},
    {path: '**', pathMatch: 'full', redirectTo: ''}
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});
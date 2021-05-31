import { SalesLeadsComponent } from './sales-leads/sales-leads.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
 {path: 'index', component: SalesLeadsComponent}, 
 {path: 'login', component: LoginComponent},
 {path: '', redirectTo: 'login', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:'', component: MenuComponent},
  {path:'signup', component:SignupComponent},
  {path:'user', component:UserComponent},
  {path:'**', redirectTo:'/user', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

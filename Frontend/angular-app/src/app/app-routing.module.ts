import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// list component :) 
import {LoginComponent} from './components/login/login.component';
import {UserDashBoardComponent} from './components/user-dash-board/user-dash-board.component';
const routes: Routes = [
  {path : 'login' , component : LoginComponent },
  {path : 'userDashBoard', component : UserDashBoardComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

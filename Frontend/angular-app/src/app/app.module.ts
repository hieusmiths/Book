import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTopComponent } from './components/header-top/header-top.component';
import { LoginComponent } from './components/login/login.component';
import { UserDashBoardComponent } from './components/user-dash-board/user-dash-board.component';
import { AdminDashBoardComponent } from './components/admin-dash-board/admin-dash-board.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    LoginComponent,
    UserDashBoardComponent,
    AdminDashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

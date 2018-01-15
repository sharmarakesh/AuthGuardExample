import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { RoutingModule } from './app.router.module';
import { AuthenticationGuard } from './authentication.guard';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { UserService } from '../app/_services/user.service';
import { TestArticleComponent } from './test-article/test-article.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TestArticleComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [AuthenticationGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

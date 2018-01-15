import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { HomeComponent } from '../app/home/home.component';
import { AuthenticationGuard } from './authentication.guard';
import { TestArticleComponent } from '../app/test-article/test-article.component';

const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', canActivate: [ AuthenticationGuard ], component: HomeComponent},
    {path: 'test-article', canActivate: [ AuthenticationGuard ], component: TestArticleComponent},
    {path: '**', redirectTo: ''}
    
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class RoutingModule {

}
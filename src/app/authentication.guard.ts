import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../app/_services/user.service';
import 'rxjs';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise <boolean> | boolean {
      console.log(state.url);
      if (this.userService.isUserLoggedIn()) {
        return true; 
      }
            alert("Invalid credential!");
            this.userService.setRedirectUrl(state.url);
            this.router.navigate([ this.userService.getLoginUrl() ]);
      return false;
      // if (this.userService.isAuthenticated()) {
      //   this.router.navigate([this.userService.getRedirectUrl()]);
      //   return true;
      // }
      // return false;
    }
  }

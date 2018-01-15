
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from '../_model/user.model';

let usersObservable = Observable.of(User);

@Injectable()
export class UserService {
    private redirectUrl: string = '/home';
    private isloggedIn: boolean = false;
    private loggedInUser: User;
    private loginUrl: string = '/login';
    constructor(private http:Http) { }

    isUserAuthenticated(username: string, password: string): Observable<boolean> {
        //return this.authenticate(username, password);
        return this.authenticate(username, password).map(user => {
          alert('LOVE : ' +user);
            if(user) {
                this.isloggedIn = true;
                 //this.loggedInUser.username = username;
            } else {
                this.isloggedIn = false;
            }
            return this.isloggedIn;
        });
    }

    authenticate(username: string, password: string) {
        //let apiUrl = 'http://localhost:8080/service/authenticate?username='+username;
        //const apiUrl = ;
        return this.http.get('http://localhost:8080/authenticate?username=' + username).map(user => {
          alert(user);
            if(user) {
                this.isloggedIn = true;
                 //this.loggedInUser.username = username;
            } else {
                this.isloggedIn = false;
            }
            return this.isloggedIn;
        });
        //return this.http.get('assets/user.json', {  });
        // return this.http.get('data/user.json')
        // .map((response: Response) => response.json());
    }

    isUserLoggedIn(): boolean {
		return this.isloggedIn;
	}

    getLoginUrl(): string {
		return this.loginUrl;
	}
	getLoggedInUser(): User {
		return this.loggedInUser;
    }

    logout() {
        this.isloggedIn = false;
    }

    getRedirectUrl(): string {
		return this.redirectUrl;
	}
	setRedirectUrl(url: string): void {
		this.redirectUrl = url;
	}
}

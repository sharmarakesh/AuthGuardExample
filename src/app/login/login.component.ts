import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(
    private router: Router,
    private userService: UserService) { }

ngOnInit() {
    // reset login status
    this.userService.logout();
}

login() {
  //this.loading = true;
  // this.userService.login(this.model.username, this.model.password)
  //     .subscribe(result => {
  //         if (result === true) {
  //             // login successful
  //             this.router.navigate(['/home']);
  //         } else {
  //             // login failed
  //             //this.error = 'Username or password is incorrect';
  //             alert("Not ");
  //         }
  //     });

  this.userService.isUserAuthenticated(this.model.username, this.model.password).subscribe (
	       authenticated => {
           console.log(authenticated);
		    if(authenticated) {
    			 let url =  this.userService.getRedirectUrl();
    			 console.log('Redirect Url:'+ url);
    			 this.router.navigate([ url ]);
    		    } else {
    			 alert('Invalid Credentials. Try again.');
    		    }
	       }
	   );
}

}

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;
  alertMessage: any;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    this.alertMessage = '';
    const user = {
      username: this.username,
      password: this.password
    };

    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);

        this.router.navigate(['main']);
        console.log(data);
      } else {
        console.log(data.msg);
        this.alertMessage = 'Failed to login';
        // this.router.navigate(['login']);
      }
    });
  }

}

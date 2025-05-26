import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  email = '';
  password = '';
  disableLoginButton = true;

  constructor(private authService: AuthService, private router:Router) {
    this.authService.getSession().then((session) => {
      console.log('Session:', session);
    }).catch(err => {
      console.warn('Session error:', err.message);
    });
  }
  
  validateLoginData () {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(this.email) === true && this.password.length > 3 ) {
      this.disableLoginButton = false;
    } else {
      this.disableLoginButton = true;
    }
  }

  login() {
    this.authService.signIn(this.email, this.password).then((res) => {
      if(res === true){
        const access = localStorage.getItem('token');
        if(!access){
          this.router.navigate(['/home/product'])
        } else {
          this.router.navigate(['/home']);
        }
      }
    }).catch(err => {
      console.log(err.message)
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { LoginAccount } from './login'
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  model: LoginAccount = { email: "", password: ""}
  constructor(private authService: AuthService) {

  }

  onSubmit(ngForm) {
    this.authService.login(this.model);
  }
}

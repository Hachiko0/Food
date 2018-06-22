import { Component, OnInit } from '@angular/core';
import { RegisterAccount } from './register'
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.html',
  styleUrls: ['./create-account.css']
})
export class CreateAccountComponent implements OnInit {
  constructor(private authService: AuthService) {

  }
  model: RegisterAccount = { firstName: null, lastName: null, email: null, age: 0, password: null, confirmPassword: null }
  onSubmit(ngForm) {
    this.authService.register(this.model);
  }

  ngOnInit() {
  }
}


import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public model: LoginAccount;
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.model = { email: null, password: null }
  }

  onSubmit(ngForm) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post(this.baseUrl + 'api/account/generateToken', this.model, httpOptions).subscribe(result => {
      console.log(result, 666);
    }, error => console.error(error));
  }
}


interface LoginAccount {
  email: string,
  password: string,
}

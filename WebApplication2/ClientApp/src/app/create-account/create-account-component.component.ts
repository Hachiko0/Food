import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create-account-component',
  templateUrl: './create-account-component.component.html',
  styleUrls: ['./create-account-component.component.css']
})
export class CreateAccountComponentComponent implements OnInit {
  model: RegisterAccount = { firstName: null, lastName: null, email: null, age: 0, password: null, confirmPassword: null }
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  onSubmit(ngForm) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post(this.baseUrl + 'api/account/register', this.model, httpOptions).subscribe(result => {
      console.log(result, 666);
    }, error => console.error(error));
  }

  ngOnInit() {
  }
}

interface RegisterAccount {
  firstName: string,
  lastName: string,
  email: string,
  age: number
  password: string,
  confirmPassword: string
}


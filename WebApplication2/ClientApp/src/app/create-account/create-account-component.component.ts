import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create-account-component',
  templateUrl: './create-account-component.component.html',
  styleUrls: ['./create-account-component.component.css']
})
export class CreateAccountComponentComponent implements OnInit {

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    //var model: RegisterAccount = { Password: 'j)K;#3ZU9*^pEMRG', Email: 'krasi@test.com' }
    //http.post(baseUrl + 'api/account/register', model, httpOptions).subscribe(result => {
    //  var asdf = result;
    //  console.log(asdf, 666);
    //}, error => console.error(error));
  }

  ngOnInit() {
  }
}

interface RegisterAccount {
  Email: string,
  Password: string
}


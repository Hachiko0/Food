import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService implements OnInit {
  private httpOptions;
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private router: Router) {
  }

  ngOnInit() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  register(model) {
    this.http.post(this.baseUrl + 'api/account/register', model, this.httpOptions).subscribe(result => {
    }, errorResponse => alert(errorResponse.error));
  }

  login(model) {
    this.http.post(this.baseUrl + 'api/account/generateToken', model, this.httpOptions).subscribe(user => {
      if (user) {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        this.router.navigate(['/']);
      }
    }, errorResponse => alert(errorResponse.error));
  }

  isLoggedIn() {
    return sessionStorage.getItem('currentUser') !== null;
  }
}

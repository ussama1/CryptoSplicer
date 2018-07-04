import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Config} from '../Config';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Injectable()
export class SignupService {
  result: any;
  model: any = {};

  constructor(private http: Http, private _nav: Router, ) { }

  signUp(username, email, Password) {
    return this.http.post( Config.api + 'crypto/registeration/',
      {
        'username': username,
        'email': email,
        'password': Password,

      }).map((res: Response) => {
      if (res) {
        if (res.status === 201 || res.status === 200) {
          const responce_data = res.json();
          this._nav.navigate(['/login']);
          return [{status: res.status, json: res}];
        } else if (res.status === 5300) {
          this._nav.navigate(['/login']);
          return [{status: res.status, json: res}];
        } else {
        }
      }
    });
  }
  check_email_unique(email) {
    return this.http.get(Config.api + 'crypto/emailexist/' + email ).map((response: Response ) => response.json());
  }
  username_verify(username) {
    return this.http.get(Config.api + 'crypto/usernameexist/' + username ).map((response: Response ) => response.json());
  }
}

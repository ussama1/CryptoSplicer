import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../Config';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import swal from 'sweetalert2';
import { isPlatformBrowser } from '@angular/common';
import { JwtHelper } from "angular2-jwt";
import {HttpService} from '../serv/http-service';

@Injectable()
export class LoginService {
  result: any;
  public token: string;
  constructor(private http: HttpService, private _nav: Router, @Inject(PLATFORM_ID) private platformId: Object) {

    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  LogIN(username,password): Observable<any> {
    // console.log(username,password);
    const  headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    } );
    // headers.append('Content-Type', 'application/json');
    //   headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post( Config.api+'crypto/login/',JSON.stringify(
      {
        "username": username,
        "password": password

      }),{ headers: headers }).map
    (
      (res:  Response) => {
        let user = { username: username, token: res.json().token};

        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
// console.log ("junaid",localStorage.getItem('currentUser'))
        }
      });
  }

  isactivate(username) {
    const headers = new Headers(); headers.append('Content-Type', 'application/json');
    return this.http.get (Config.api+'crypto/isactivated/' + username, { headers: headers }).map((res: Response) => res.json());
  }
}

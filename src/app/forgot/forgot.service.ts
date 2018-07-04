import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Config} from '../Config';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Injectable()
export class ForgotService {
  result: any;
  model: any = {};

  constructor(private http: Http, private _nav: Router, ) { }

  forgot(email) {
    // console.log(email)
    const  headers = new Headers({

      'Content-Type': 'application/json',
    } );
    let options = new RequestOptions({ headers: headers });
    return this.http.post( Config.api +'crypto/forgetpassword/',JSON.stringify(
      {
        'email': email,

      }),options).map((res: Response) => res.json()
    );

  }
}

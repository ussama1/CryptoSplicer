import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Config} from '../Config';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Injectable()
export class ContactService {

  constructor(private http: Http, private _nav: Router) { }
  contact(name, email, phone_no, subject, message){
    let headers=new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});

    return this.http.post(Config.api1+'/establishcontact/',
    {
      'name': name,
      'email': email,
      'phone_no': phone_no,
      'subject': subject,
      'message': message
    }).map((res: Response) => {
      console.log(res);
    })

  }

}

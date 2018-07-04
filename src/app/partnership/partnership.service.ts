import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Config} from '../Config';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';


@Injectable()
export class PartnershipService {

  constructor(private http: Http, private _nav: Router) { }
  partnership(name, email, company, message){
    let headers=new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});

    return this.http.post(Config.api1+'contact/becomepatner/',
    {
      'name': name,
      'email': email,
      'instituation_name': company,
      'message': message
    }).map((res: Response) => {
      console.log(res);
    })

  }

}


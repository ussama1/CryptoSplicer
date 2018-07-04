import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {Config} from '../Config';

@Injectable()
export class PriceTrackerService {

  constructor(private http: Http) { }
  getRates(curr) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('https://api.exmo.com/v1/ticker/', { headers: headers }).map((response: Response) => response.json()[curr]);
  }
  rate(category) {

    return this.http.get(Config.api+'crypto/trackpricing/'+category).map((response: Response) => response.json()["market"]);
  }

}

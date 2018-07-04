import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import {HttpService} from '../serv/http-service';

@Injectable()
export class ChartsService {

  constructor(private http:HttpService) { }

  getBpiData(){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .map(res => res.json());
  }

}

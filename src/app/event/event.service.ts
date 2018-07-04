import { Injectable } from '@angular/core';
import {Headers, Response} from '@angular/http';
import {Config} from '../Config';
import {HttpService} from '../serv/http-service';

@Injectable()
export class EventService {

  constructor(private http: HttpService) { }
  geteventnews() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(Config.api+'news/events/', { headers: headers }).map((response: Response) => response.json());
  }

}

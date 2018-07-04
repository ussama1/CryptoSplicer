import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {Config} from '../Config';

@Injectable()
export class GuidesService {

    constructor(private http: Http) { }
    knowledge() {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.get(Config.api+'news/educationList/', { headers: headers }).map((response: Response) => response.json());
    }

  guides() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(Config.api+'news/guideList/', { headers: headers }).map((response: Response) => response.json());
  }

  }

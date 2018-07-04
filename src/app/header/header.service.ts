import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";
import {Router } from '@angular/router';
import {Http , Headers , Response} from '@angular/http';
import { Config} from '../Config';

@Injectable()
export class HeaderService {

  constructor(private http: Http, private _http2: Http, private _nav: Router, @Inject(PLATFORM_ID) private platformId: Object) { }

  logout() {
    const headers = new Headers();

    if (isPlatformBrowser(this.platformId)) {
      headers.append('Authorization', 'JWT ' + localStorage.getItem('Authorization').toString());
    }
    headers.append('Content-Type', 'application/json');
    return this._http2.get( Config.api + 'courses/search/', {headers : headers}).map((response: Response) => response.json());
  }
  generalsearch(name) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(name);
    return this.http.get(Config.api + 'news/search/'+ name+'/',{headers:headers}).map((response: Response) => response.json()["Results"]);
  }


}

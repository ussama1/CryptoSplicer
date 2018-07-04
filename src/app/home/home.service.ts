import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Config } from '../Config';
@Injectable()
export class HomeService {

  constructor(private http: Http) {
  }
  get_News() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(Config.api + "news/othernews/", {headers: headers}).map((res: Response) => res.json()['Results']);

  }

  get_Latest() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(Config.api + "news/latestnews/" ,{headers: headers}).map((res: Response) => res.json());

  }

  get_Readers()
  {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(Config.api+"news/readerlist/" ,{headers: headers}).map((res: Response) => res.json());

  }
  get_Feature()
  {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(Config.api + "news/featureNews/" ,{headers: headers}).map((res: Response) => res.json());

  }
  rate(category) {

    return this.http.get(Config.api+'crypto/trackpricing/'+category).map((response: Response) => response.json());
  }

}

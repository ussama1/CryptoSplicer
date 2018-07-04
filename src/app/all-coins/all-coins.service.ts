import { Injectable } from '@angular/core';
import {Config} from '../Config';
import {Headers,Http, Response} from '@angular/http';
import {HttpService} from '../serv/http-service';

@Injectable()
export class AllCoinsService {

  constructor(private http :HttpService) { }

  getAllCoins(category,page) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(Config.api+'news/analysisCoinList/'+category+'/?page='+page+'', {headers:headers}).map((response: Response) => response);
  }
  getAllTopNews(category,page) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(Config.api+'news/topAnalysiscoinList/' + category + '/?page='+page+'', {headers: headers}).map((response: Response) => response);
  }

  putAnalysis(id,totalview) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(Config.api+"news/put_Analysis_View/" + id + ' ' ,JSON.stringify(
      {
        "no_of_views": totalview
      })
      ,{headers: headers}).map((response: Response) => response.json()['Results']);
  }
  getCategory(category){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(Config.api+'news/description/'+category+'/', {headers: headers}).map((response: Response) => response.json());

  }
}

import { Injectable } from '@angular/core';
import {HttpService} from '../serv/http-service';
import {Headers, Response} from '@angular/http';
import {Config} from '../Config';

@Injectable()
export class ExclusiveService {

  constructor(private Http: HttpService) {
  }

  getAllNews(category,page) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.Http.get(Config.api+'news/AllCoinCategoryList/' + category + '/?page='+page, {headers: headers}).map((response: Response) => response);
  }


  putaltcoin(id, totalview) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.Http.put(Config.api + "news/put_News_View/" + id + ' ', JSON.stringify(
      {
        "no_of_views": totalview
      })
      , {headers: headers}).map((response: Response) => response.json()['Results']);
  }
  getAllTopNews(category,page) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.Http.get(Config.api+'news/topNewscoinList/' + category + '/?page='+page, {headers: headers}).map((response: Response) => response);
  }

  getCategory(category){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    alert('hello')
    return this.Http.get(Config.api+'news/description/'+category+'/', {headers: headers}).map((response: Response) => response.json());

  }
}

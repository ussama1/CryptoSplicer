import { Injectable } from '@angular/core';
import {Config} from '../Config';
import {Headers,Http, Response} from '@angular/http';
import {HttpService} from '../serv/http-service';

@Injectable()
export class AllNewsService {

  constructor(private Http: HttpService) {
  }

  getAllNews(category,page) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.Http.get(Config.api+'news/AllCoinCategoryList/' + category + '/?page='+page, {headers: headers}).map((response: Response) => response);
  }

  getAllTopNews(category,page) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.Http.get(Config.api+'news/topNewscoinList/' + category + '/?page='+page, {headers: headers}).map((response: Response) => response);
  }

  putaltcoin(id, totalview) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.Http.put(Config.api+"news/put_News_View/" + id + ' ', JSON.stringify(
      {
        "no_of_views": totalview
      })
      , {headers: headers}).map((response: Response) => response.json()['Results']);
  }

  getCategory(category){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.Http.get(Config.api+'news/description/'+category+'/', {headers: headers}).map((response: Response) => response.json());

  }
}







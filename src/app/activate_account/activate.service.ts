import { Injectable } from '@angular/core';
import { Config } from '../Config';
import { Http, Headers, HttpModule, Response } from '@angular/http';
@Injectable()
export class ActivateService {

  constructor(private _http5: Http) { }

  activate(uid) {
    console.log(uid)
    let headers = new Headers();
    return this._http5.get(Config.api+'crypto/activate_account/' + uid, { headers: headers }).map((response: Response) => response.json());
  }
}

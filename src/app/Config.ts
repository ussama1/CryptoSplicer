import {Inject,Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
@Injectable()
export class Config {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  // public static api:string ='https://apis.notesgenie.com/';
  // public static Imageurl:string ='http://ns520442.ip-158-69-23.net:2288/media/';
  // public static api:string ='http://ns520442.ip-158-69-23.net:2288/';
  // public static api: String = 'http://ns520442.ip-158-69-23.net:6002/';

  // public static api: String = 'http://192.168.30.179:9000/';
  // public  static api1: String ='http://192.168.30.179:9000/contact';
  // public static Imageurl: String = 'http://192.168.30.179:9000/media/';

  public static api: String = 'https://apis.cryptosplicer.com/';
  public  static api1: String ='https://apis.cryptosplicer.com/contact';
  public static Imageurl: String = 'https://apis.cryptosplicer.com/media/';
  public static Imageurlget: String = 'https://storage.cryptosplicer.com/images/'

  get_auth_header() {
    if (isPlatformBrowser(this.platformId)) {
      const headers = new Headers({'Authorization': 'JWT ' + (JSON.parse(localStorage.getItem('currentUser')).token).toString()});

      headers.append('Content-Type', 'application/json');
      return {headers: headers};
    }
  }
}

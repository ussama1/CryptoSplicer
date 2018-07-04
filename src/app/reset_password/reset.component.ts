import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { PasswordValidation } from './password-validator.component';
import { SimpleGlobal } from 'ng2-simple-global';
import { Validators,FormControl, FormGroup } from '@angular/forms';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import swal from 'sweetalert2';
import {Config} from '../Config';
import {Headers, RequestOptions} from '@angular/http';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  hide = true;


  private next: any;
  model: any = {};
  public token;
  sub;
  pass2;
  flag = true;
  pass1;

  constructor(public router: Router, private http: HttpClient, private route: ActivatedRoute, private sg: SimpleGlobal) {
  }


  ngOnInit() {

    this.route.params.subscribe(params => {
      this.token = params['token']

      console.log('paramsssssssssss', this.token)

      console.log(params['token'], 1)


    });
    this.sub = this.route.params.subscribe(params => {
      console.log(this.token)

    });
  }

//   resetpass() {
//     console.log();
//     this.obj.forgot(this.model.resetpassword,).subscribe(Res => {
//       console.log(this.model.resetpassword);
//     });
//   }
// }
  resetpass(token,pass1,pass2) {
    //alert('hello');
    console.log(token, "data is here")




    const  headers = new Headers({

      'Content-Type': 'application/json',
    } );
    // headers.append('Content-Type', 'application/json');
    //   headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    this.http.post(Config.api+'crypto/reset_password/'+ token, {


      'password1': pass1,
      'password2': pass2,
      'authentication_code': token
    })


      .subscribe(Res => {

          console.log(Res);


        },
        error => {
          console.log(error);

          swal(
            'Invalid',
            'May be Some error!',
            'error'
          )
        });

  }
}

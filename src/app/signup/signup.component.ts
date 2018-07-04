import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Router } from '@angular/router';
import { SimpleGlobal } from 'ng2-simple-global';
import { ResponseContentType } from '@angular/http/src/enums';
import { FormBuilder, Validators, NgForm, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import swal from 'sweetalert2';
import { MatSelect } from '@angular/material';
import { SignupService } from './signup.service';
import { ErrorStateMatcher, MatStepper } from '@angular/material';
// import {PasswordValidation} from './password-validator.component';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  username;
  password;
  password2;
  hide = true;
  hide2 = true;
  private next: any;
  model: any = {};
  email = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';
  public usernameResponse;
  public usernamestatus = false;
  public emailResponse;
  public emailstatus = false;
  public usernameLower = "";
  public emailLower = "";

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z0-9_.-]+?'),
    Validators.maxLength(50)
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.email),
    Validators.maxLength(100)
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.password),
    Validators.minLength(8),
    Validators.maxLength(30)
  ]);

  passwordFormControl2 = new FormControl('', [
    Validators.required,
    Validators.pattern(this.password),
    Validators.minLength(8),
    Validators.maxLength(30)
  ]);

  flag = true;
  date = new FormControl(new Date());

  emailexist: boolean = false;


  constructor(private _serv: SignupService, public router: Router, private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private sg: SimpleGlobal) {
  }

  ngOnInit() {

    // this.signupForm = this.fb.group({
    //   'username': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
    //   'password': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
    //   'email': ['', Validators.compose([Validators.required, Validators.pattern(this.email)])],
    //   'password2': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
    // });
  }


  signup(f: NgForm) {

    this._serv.signUp(this.model.username, this.model.email, this.model.password).subscribe();
    this.showSuccess();
    this.router.navigate(['/login']);
    console.log(this.model.username, this.model.email, this.model.password);
  }
  usernameError() {
    swal({
      type: 'error',
      title: 'Username already Exist <br> Please enter another username!',
      width: '512px',
      timer: 2500
    })
  }

  emailError() {
    swal({
      type: 'error',
      title: 'Email already registered <br> Please use another email!',
      width: '512px',
      timer: 2500
    })
  }
  getusername() {
    if (this.model.username !== '') {
      this._serv.username_verify(this.model.username).subscribe(Response => {
          if(Response.message == "User name already exist"){
            this.usernameError();
          }
        },
        error => {
          this.usernameResponse = true;
        });
    }
  }
  getemail() {
    if (this.model.email !== '') {
      this._serv.check_email_unique(this.model.email).subscribe(Response => {
          if(Response.messgae == "Email already exist"){
            this.emailError();
          }
        },
        error => {
          this.emailstatus = false;
        });
    }
  }


  showSuccess() {
    swal({
      type: 'success',
      title: 'Please check your inbox for Email. Enter that Email below to continue the CryptoSplicer Signup Process.',
      showConfirmButton: false,
      width: '512px',
      timer: 2500
    })
  }
}

import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup, NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import {FormsModule} from '@angular/forms';
import { LoginService } from './login.service';
// import {PasswordValidation} from './password-validator.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [FormsModule],
})
export class LoginComponent {


  username;
  password;
  public captcha: boolean =false;
  password2;
  hide = true;
  hide2 = true;
  LoginForm: FormGroup;
  private next: any;
  model: any = {};
  normalPattern = '[a-zA-Z0-9_.-]+?';
  digitsOnly = '^[0-9,-]+$';
  email = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z0-9_.-]+?'),
    Validators.maxLength(50)
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.password),
    Validators.minLength(8),
    Validators.maxLength(30)
  ]);

  flag = true;
  date = new FormControl(new Date());

  emailexist: boolean = false;

  constructor(private obj: LoginService, public router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'password': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
    });
  }
  sweetalertloginsuccess() {
    swal({
      text: 'Login Successflluy!',
      title: "CryptoSplicer",
      type: "success",
      confirmButtonColor: "#a5dc86",
      confirmButtonText: "OK",
    })

    this.router.navigate(['/home'])
    {
    };
  };
  sweetalertaccountnotactive() {
    swal({
      text: 'Please activate your account!',
      title: "CryptoSplicer",
      type: "warning",
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Try again",
    });
    this.router.navigate(['/login'])
  };

  sweetalertloginfail() {
    swal({
      text: 'Incorrect Credentials',
      title: "CryptoSplicer",
      type: "warning",
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Try again",
    });
    this.router.navigate(['/login'])
  };

  onChange(e) {
    alert(e)
  }
  check(e) {
    console.log(this.model)
  }

  Login(f: NgForm) {
    // console.log(this.model.username);
    this.obj.isactivate(this.model.username).subscribe(Data => {
      // console.log(this.result);
      if (Data.Activated == true) {
        // this.sweetalertloginsuccess();
        this.obj.LogIN(this.model.username, this.model.password).subscribe(Res => {
          swal({

            type: 'success',
            title: 'SuccessFully Logged In',
            showConfirmButton:false,
            timer: 1500

          });
           this.router.navigate(['/home'])

        },error2 => {
          swal(
            'Invalid',
            'Username or Password',
            'error'
          )

          }
          );
      }

    },
      error => {
      swal(
        'Invalid',
        'Please Activate Your Account',
        'error'
      )
      });
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
    this.captcha= true;
    // console.log('recap', this.captcha);
    // alert('recap'+this.captcha);
  }
}

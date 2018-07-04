import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/map';
import { ActivatedRoute, Router } from '@angular/router';
import { SimpleGlobal } from 'ng2-simple-global';
import { FormBuilder, Validators,FormControl, FormGroup,NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';
import {MatSelect} from '@angular/material';
import {ForgotService} from'./forgot.service';
import {ErrorStateMatcher, MatStepper} from '@angular/material';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  hide = true;
  hide2 = true;
 forgotForm: FormGroup;
  // forgotForm;
  private next:any;
  model:any = {};
  normalPattern = '[a-zA-Z0-9_.-]+?';
  digitsOnly = '^[0-9,-]+$';
   email = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.email),
    Validators.maxLength(100)
  ]);

  flag = true;
  date = new FormControl(new Date());

  emailexist : boolean = false ;


  constructor(private _serv: ForgotService, public router: Router, private fb: FormBuilder, private http: HttpClient,private route: ActivatedRoute, private sg: SimpleGlobal) { }

  ngOnInit() {

    // this.forgotForm = this.fb.group({
    //   'email': ['', Validators.compose([Validators.required, Validators.pattern(this.email)])],


    // });
    this.forgotForm = new FormGroup({
      email: new FormControl(Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(this.email)
      ]))
    })
  }
  sweetalertForgot() {
    swal({
      text: 'Check Your Email ForgotLink Sent',
      title: "CryptoSplicer",
      type: "success",
      confirmButtonColor: "#DD6B55",

    });
    this.router.navigate(['/login'])
  };
  forgot(f: NgForm) {
    // console.log();
    this._serv.forgot(this.model.email,).subscribe(Res => {
      // console.log(this.model.email);
      this.sweetalertForgot();
    });
  }
}

import { Component, OnInit } from '@angular/core';
// import {PartnershipService} from './partnership.service';
import swal from 'sweetalert2'

import {PartnershipService} from './partnership.service';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Router } from '@angular/router';
import { SimpleGlobal } from 'ng2-simple-global';
import { ResponseContentType } from '@angular/http/src/enums';
import { FormBuilder, Validators, NgControl, RadioControlValueAccessor,FormControl, FormGroup, NgForm } from '@angular/forms';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import {MatSelect, ErrorStateMatcher, MatStepper} from '@angular/material';


@Component({
  selector: 'app-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.css']
})
// export class PartnershipComponent implements OnInit {
//   username;
//   password;
//   email_regex = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';
//   public model: any = {};
//   public Contacts: any;
//   loaded = false;
//   lat = 31.514538;
//   lng = 74.34482;
//
//   usernameFormControl = new FormControl('', [
//     Validators.required,
//     Validators.pattern(NAME_REGEX)
//   ]);
//
//   emailFormControl = new FormControl('', [
//     Validators.required,
//     Validators.pattern(this.email_regex)
//   ]);
//
//   companyFormControl = new FormControl('', [
//     Validators.required,
//     Validators.pattern(NAME_REGEX)
//   ]);
//   // Validators.pattern('[a-zA-Z]+?')
//
//   messageFormControl = new FormControl('', [
//     Validators.required,
//     Validators.pattern(NAME_REGEX)
//   ]);
//
// constructor(){}
//   // constructor(private obj: PartnershipService) { }
//
//   ngOnInit() {
//
//   }
//
//   // onSubmit(f: NgForm) {
//   //   this.obj.add_partner(this.model.name, this.model.email, this.model.company, this.model.message).subscribe(
//   //     data => {
//   //       // console.log(data);
//   //       this.partnershipSuccess();
//   //       f.reset();
//   //     },
//   //     error => {
//   //       // console.log(error);
//   //     }
//   //   );
//   // }
//
//
//   // partnershipSuccess() {
//   //   swal({
//   //     type: 'success',
//   //     title: 'Message Sent Successfully',
//   //     text: 'We will get back to you soon!',
//   //     showConfirmButton: false,
//   //     width: '512px',
//   //     timer: 2500
//   //   })
//   // }
//
// }
export class PartnershipComponent implements OnInit {




  NAME_REGEX = /^[a-zA-Z _.]+$/;
  email_regex = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';

  public model: any = {};
  public Partnership: any;
  partnershipForm: FormGroup;

  usernameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.NAME_REGEX)
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.email_regex)
  ]);

  companyFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.NAME_REGEX)
  ]);

  messageFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.NAME_REGEX)
  ]);


  constructor(private _serv: PartnershipService,
    public router: Router,
    private fb: FormBuilder,
    private http:HttpClient,
    private route: ActivatedRoute,
    private sg: SimpleGlobal
  ){}

  // constructor(private obj: PartnershipService) { }

  ngOnInit() {

    this.partnershipForm = this.fb.group({
      'mode.name': ['', Validators.compose([Validators.required, Validators.pattern(this.NAME_REGEX)])],
      'model.email': ['', Validators.compose([Validators.required, Validators.pattern(this.email_regex)])],
      'model.company': ['', Validators.compose([Validators.required, Validators.pattern(this.NAME_REGEX)])],
      'model.message': ['', Validators.compose([Validators.required, Validators.pattern(this.NAME_REGEX)])],
      });

  }

  onSubmit() {
  //   this.obj.add_partner(this.model.name, this.model.email, this.model.company, this.model.message).subscribe(
  //     data => {
  //       // console.log(data);
  //       this.partnershipSuccess();
  //       f.reset();
  //     },
  //     error => {
  //       // console.log(error);
  //     }
  //   );


  console.log(this.model.name, this.model.email,
    this.model.company, this.model.message);
    this._serv.partnership(this.model.name, this.model.email,
    this.model.company, this.model.message).subscribe(data=>{
      console.log(data)

    })


  }


  partnershipSuccess() {
    swal({
      type: 'success',
      title: 'Message Sent Successfully',
      text: 'We will get back to you soon!',
      showConfirmButton: false,
      width: '512px',
      timer: 2500
    })
  }

}

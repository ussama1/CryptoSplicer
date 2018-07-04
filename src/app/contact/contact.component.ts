import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ContactService} from './contact.service';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Router } from '@angular/router';
import { SimpleGlobal } from 'ng2-simple-global';
import { ResponseContentType } from '@angular/http/src/enums';
import { FormBuilder, Validators, NgControl, RadioControlValueAccessor,FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import swal from 'sweetalert2';
import {MatSelect} from '@angular/material';
import {ErrorStateMatcher, MatStepper} from '@angular/material';






@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  normalPattern = '[a-zA-Z0-9_.-]+?';
  NAME_REGEX = /^[a-zA-Z _.]+$/;
  PHONE_REGEX = /^[0-9+]+$/;
  email_regex = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';
  public model: any = {};
  public Contact: any;
  loaded = false;
  contactForm: FormGroup;

  // usernameFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.pattern(this.NAME_REGEX)
  // ]);

  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.pattern(this.email_regex)
  // ]);

  // phoneFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.pattern(this.PHONE_REGEX)
  // ]);

  // subjectFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.pattern('[a-zA-Z0-9_.+-, !@#$%^&*()<>{}|=~]+?')
  // ]);



  

  
constructor(private _serv: ContactService,
  public router: Router,
  private fb: FormBuilder,
  private http:HttpClient,
  private route: ActivatedRoute,
  private sg: SimpleGlobal
){}
  // constructor(private obj: ContactUsService) { }

  ngOnInit() {


////////////////ngoninit//////////////////
this.contactForm = this.fb.group({
'mode.email': ['', Validators.compose([Validators.required, Validators.pattern(this.email_regex)])],
'model.username': ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z_\- ]+$/)])],
'model.Phone': ['', Validators.compose([Validators.required, Validators.pattern(this.PHONE_REGEX)])],
'model.subject': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
'model.message': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
});



  }
// this.contactForm = new FormGroup({
//   usernameForm : new FormControl('', Validators.compose([
//     Validators.required,
//     Validators.pattern(this.NAME_REGEX)
//   ])),

//   emailForm : new FormControl('', Validators.compose([
//     Validators.required,
//     Validators.pattern(this.email_regex)
//   ])),

//   phoneForm : new FormControl('', Validators.compose([
//     Validators.required,
//     Validators.pattern(this.PHONE_REGEX)
//   ])),

//   subjectForm : new FormControl('', Validators.compose([
//     Validators.required,
//     Validators.pattern('[a-zA-Z0-9_.+-, !@#$%^&*()<>{}|=~]+?')
//   ])),

//   messageForm : new FormControl('', Validators.compose([
//     Validators.required,
//     Validators.pattern('[a-zA-Z0-9_.+-, !@#$%^&*()<>{}|=~]+?')
//   ])),
// })


   //  this.obj.get_contacts().subscribe(response => {
   //    this.Contacts = response;
   // //   console.log(this.Contacts);
   //    this.loaded = true;
   //  });
  

  // onlyNumberKey(event){
  //   let charCode = (event.query) ? event.query : event.keyCode;
  //   // console.log(charCode);
  //   if (charCode > 31
  //     && (charCode < 48 || charCode > 57))
  //     return false;
  //
  //   return true;
  // }
  contact(){
    console.log(this.model.username, this.model.email,
      this.model.phone_no, this.model.subject, this.model.message)
    this._serv.contact(this.model.username, this.model.email,
      this.model.phone_no, this.model.subject, this.model.message).subscribe(data=>{
        console.log(data)

      })
  }

  // onSubmit(f: NgForm) {
  //   // alert('Contact'+ this.model.name);
  //   this.obj.add_contact(this.model.name, this.model.email, this.model.phone, this.model.subject, this.model.message).subscribe(
  //     data => {
     //   console.log(data);
        // this.contactSuccess();
        //  f.reset();
        // this.contactform.reset();
        // this.model.name = '';
        // this.model.email = '';
        // this.model.phone = '';
        // this.model.subject = '';
        // this.model.message = '';
      // },
      // error => {
        // console.log(error);
  //     }
  //   );
  // }

  contactSuccess() {
    swal({
      type: 'success',
      title: 'Contact Request Sent Successfully',
      text: 'We will get back to you soon!',
      showConfirmButton: false,
      timer: 2500
    })
  }
}

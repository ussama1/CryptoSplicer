import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Headers, Response, Http } from "@angular/http"
import { ActivateService} from './activate.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {
  sub;
  constructor(private _serv: ActivateService,
    private route: ActivatedRoute,
    private router: Router,
    private http5: Http) { }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.authenticate(params['query1'])
    });
  }
  authenticate(uid) {
    console.log(uid)
    this._serv.activate(uid)
      .subscribe(
        data => {
          swal({
            type: 'success',
            title: 'Verify Your Account',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/login']);
        },
        error => {
          alert(error)
          // this.router.navigate(['/login']);
        });
  }
}

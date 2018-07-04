import { Component, OnInit } from '@angular/core';
import {EventService} from './event.service';
import {Config} from '../Config';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {Router} from '@angular/router';
import {PagerService} from '../paginator.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  rates: any = [];
  public Imageurl =Config.Imageurl;
  // collection=[];
  pager: any = {};

  constructor(private obj: EventService , private page: PagerService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getevent();
  }

  getevent(){

    this.obj.geteventnews().subscribe(Response => {
      this.rates = Response;
      console.log(this.rates+ 'are you there ??')
    })
  }
}

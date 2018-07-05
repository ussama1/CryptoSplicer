import { Component, OnInit } from '@angular/core';
import {Config} from '../Config';
import {Subscription} from 'rxjs/Subscription';
import { Router } from "@angular/router";
import { ActivatedRoute, RouterModule } from "@angular/router";
import {HeaderService} from '../header/header.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public sub: Subscription;
  public name;
  public result;
  data;
  public Imageurl = Config.Imageurl;

public bitcoin :any[];
  constructor(private router: Router, private route: ActivatedRoute,private http: HeaderService) { }

  ngOnInit() {
    // console.log('gggggggggggg');
    // this.name = localStorage.getItem('name');

    this.sub=this.route.params.subscribe(params =>{
      this.name=+params['name'];
      this.generalsearch(params['name']);
    })

    // console.log(name)
    // this.generalsearch();
  }

  generalsearch(name) {
    this.http.generalsearch(name).subscribe(data => {
      this.bitcoin = data;
      console.log(this.bitcoin);
     // this.bitcoin=Array.of(this.bitcoin);
      for (let prod of this.bitcoin) {
        console.log(prod["image"])
        prod["image"] = prod["image"].split(" ", "1", "x");
        console.log(this.name + 'Search data');
      }
    });
  }
}

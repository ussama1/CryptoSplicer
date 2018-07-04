import { Component, OnInit,NgZone } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute, RouterModule } from "@angular/router";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
  }

}

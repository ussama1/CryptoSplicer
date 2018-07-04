import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from "@angular/router";
import { Router} from '@angular/router';

@Component({
  selector: 'app-why-cryptosplicer',
  templateUrl: './why-cryptosplicer.component.html',
  styleUrls: ['./why-cryptosplicer.component.css']
})
export class WhyCryptosplicerComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { GuidesService } from './guides.service';
declare const $: any;

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css']
})
export class GuidesComponent implements OnInit {

  constructor(private obj: GuidesService) { }
  Guides: any[];
  Guides1: any[];
  ngOnInit() {
    this.guides();
    this.knowledge();
  }

  guides(){
    this.obj.knowledge().subscribe(Data => {
      this.Guides = Data;
      // console.log(this.Guides);

      setTimeout(function () {
        $('.guides-1').slick({
          // autoplay: true,
          slidesToShow: 4,
          prevArrow:'<button type="button" class="left-arrow-news"><i class="fa fa-angle-left"></i></button>',
          nextArrow:'<button type="button" class="right-arrow-news"><i class="fa fa-angle-right"></i></button>',
        });
      }, 0);
    });
  }

  knowledge(){
    this.obj.guides().subscribe(Data => {
      this.Guides1 = Data;
      // console.log(this.Guides);
      setTimeout(function () {
        $('.guides-2').slick({
          // autoplay: true,
          slidesToShow: 4,
          prevArrow:'<button type="button" class="left-arrow-news"><i class="fa fa-angle-left"></i></button>',
          nextArrow:'<button type="button" class="right-arrow-news"><i class="fa fa-angle-right"></i></button>',
        });
      }, 0);
    });
  }

}

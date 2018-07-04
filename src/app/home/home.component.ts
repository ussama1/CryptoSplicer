import { Component, OnInit, Pipe } from '@angular/core';
import { HomeService } from './home.service'
declare const $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  result;
  rates:any=[];
  result1;
  result2;
  result3;
  BTC_USD: any = [];
  ETH_USD: any = [];
  BCH_USD: any = [];
  LTC_USD: any = [];
  DASH_USD: any = [];
  XEM_USD: any = [];
  ZCASH_USD: any = [];
  constructor(private obj: HomeService) { }
  // public Imageurl=Config.Imageurl;
  category;
  ngOnInit() {

    $('.buy-sell-blocks-1').slick({
      // autoplay: true,
      slidesToShow:4,
      prevArrow:'<button type="button" class="buy-sell-left-btn"><i class="fa fa-angle-left"></i></button>',
      nextArrow:'<button type="button" class="buy-sell-right-btn"><i class="fa fa-angle-right"></i></button>',
    });

    const mainSearch = $('.main-search');
    const formSearch = $('.form-search');

    $('.search-bg__text').click(function() {
      $(mainSearch).addClass('active');
      $('body').addClass('noScroll');
      $(formSearch).addClass('flipInX');
      setTimeout(function(){
        $('.form-search .mat-input-element').focus();
      }, 370);
    });

    $('#closeSearch').click(function () {
      $(mainSearch).removeClass('active');
      $('body').removeClass('noScroll');
      $(formSearch).removeClass('flipInX');
    });

    $('.homeSlider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      prevArrow: '<button class="leftRs"><i class="fa fa-angle-left"></i></button>',
      nextArrow: '<button class="rightRs"><i class="fa fa-angle-right"></i></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
    });

    this.get_news();
    this.get_latest();
    this.get_Readers();
    this.get_feature();
    this.getrates();
  }

  get_news()
  {

    this.obj.get_News().subscribe(Data =>{
      this.result= Data;
      for (let prod of this.result) {
        console.log(prod["image"])
        prod["image"] = prod["image"].split(" ", "1", "x");
      }
      // this.result=Array.of(this.result);
      setTimeout(function () {
        $('.coinnews-slider-other').slick({
          // autoplay: true,
          slidesToShow: 4,
          prevArrow: '<button type="button" class="left-arrow-news"><i class="fa fa-angle-left"></i></button>',
          nextArrow: '<button type="button" class="right-arrow-news"><i class="fa fa-angle-right"></i></button>',
        });
       }, 0);
  });
  }

  get_latest()
  {
    this.obj.get_Latest().subscribe( RES=>{
      this.result1= RES;
      // console.log(this.result1 +'Data are her');
      setTimeout(function () {
        $('.coinnews-slider-latest').slick({
          // autoplay: true,
          slidesToShow: 4,
          prevArrow:'<button type="button" class="left-arrow-news"><i class="fa fa-angle-left"></i></button>',
          nextArrow:'<button type="button" class="right-arrow-news"><i class="fa fa-angle-right"></i></button>',
        });
      }, 0);

    })

  }
  get_feature()
  {
    this.obj.get_Feature().subscribe( RS=>{
      this.result3= RS;
      // console.log(this.result1 +'Data are her');
      setTimeout(function () {
        $('.coinnews-slider-feature').slick({
          // autoplay: true,
          slidesToShow: 4,
          prevArrow:'<button type="button" class="left-arrow-news"><i class="fa fa-angle-left"></i></button>',
          nextArrow:'<button type="button" class="right-arrow-news"><i class="fa fa-angle-right"></i></button>',
        });
      }, 0);

    })
  }
  get_Readers()
  {
    this.obj.get_Readers().subscribe( RE=>{
      this.result2= RE;
      for (let prod of this.result2) {
        console.log(prod["image"])
        prod["image"] = prod["image"].split(" ", "1", "x");
      }
      // console.log(this.result1 +'Data are her');
      setTimeout(function () {
        $('.coinnews-slider-readers').slick({
          // autoplay: true,
          slidesToShow: 4,
          prevArrow:'<button type="button" class="left-arrow-news"><i class="fa fa-angle-left"></i></button>',
          nextArrow:'<button type="button" class="right-arrow-news"><i class="fa fa-angle-right"></i></button>',
        });
      }, 0);

    })

  }
  getrates()
  {
          this.obj.rate("btc-usd").subscribe(Data => {
          this.BTC_USD = Data;
        });

      this.obj.rate("ltc-usd").subscribe(Data => {
      this.LTC_USD = Data;
    });

    this.obj.rate("bch-usd").subscribe(Data => {
      this.BCH_USD = Data;
    });

    this.obj.rate("dash-usd").subscribe(Data => {
      this.DASH_USD = Data;
    });
    this.obj.rate("xem-usd").subscribe(Data => {
      this.XEM_USD = Data;
    });
    this.obj.rate("ZEC-usd").subscribe(Data => {
      this.ZCASH_USD = Data;
    });
    this.obj.rate("eth-usd").subscribe(Data => {
      this.ETH_USD= Data;
    });

      }


}

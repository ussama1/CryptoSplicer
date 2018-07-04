import {Component, Inject, PLATFORM_ID, OnInit} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  scrollTop(){
    if (isPlatformBrowser(this.platformId)) {
      window.scroll(0, 0);
    }
  }

  ngOnInit(){

    // Back to Top
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 800) {
        $('.back2top').fadeIn();
      } else {
        $('.back2top').fadeOut();
      }
      var bottom_pad = parseInt($('.footer_wrapper').height())+parseInt($('.footer_wrapper').attr('data-pad-top'))+parseInt($('.footer_wrapper').attr('data-pad-bottom')) + 30;
      if ($(window).scrollTop() > $(document).height() - $(window).height() - bottom_pad) {
        $('.back2top').css({'bottom': bottom_pad+'px'});
      } else {
        $('.back2top').css({'bottom': '30px'});
      }
    });
    $('.back2top').on('click', function () {
      $('body,html').animate({
        scrollTop: 0
      }, 400);
      return false;
    });
  }



}

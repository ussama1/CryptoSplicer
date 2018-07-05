import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import swal from "sweetalert2";
import {HeaderService} from './header.service';

declare const $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public name;
  Logedin: string = '1';
  IsLogedIn: boolean;
  islogin: boolean;
  public username;
  local;
  uname;
  result;
  category;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,private route: ActivatedRoute, public router:Router, private obj: HeaderService) {
    // this.islogin = this.isAuthenticated();
    // if (isPlatformBrowser(this.platformId)) {
    //   this.Logedin = localStorage.getItem("loged_in");
    // }
    this.username = localStorage.getItem('username')
  }

  ngOnInit() {
    this.username = localStorage.getItem('username')
    console.log(this.username)

    const mainSearch = $('.main-search');
    const formSearch = $('.form-search');

    $('#searchIcon').click(function() {
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
// this.AnalyisNews(this.category);
  }

  onsubmit(name,reset:NgForm) {
    $('.main-search').removeClass('active');
    $('body').removeClass('noScroll');
    $('.form-search').removeClass('flipInX');
    this.router.navigate(['/search/'+this.name]);
    // localStorage.setItem('name', name);
    console.log(this.name);
    reset.resetForm();
  }

  check_login() {
    if (localStorage.getItem('currentUser')) {
      this.local = localStorage.getItem('currentUser');
      let pars = JSON.parse(this.local) ;
      this.uname = pars.username;
      return true;
    } else {
      return false;
    }

  }
  logout() {
    // if (isPlatformBrowser(this.platformId)) {
    localStorage.clear();
    {
      swal({
        text: "Logout scssessfully",
        title: "CryptoSplicer",
        type: "success",
        showConfirmButton: true,
        confirmButtonColor: "#5cb85c", timer: 2000,
        confirmButtonText: "OK",
      })
    }

  }

}

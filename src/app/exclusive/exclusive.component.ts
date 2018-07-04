import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {PagerService} from '../paginator.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AllNewsService} from '../all-news/all-news.service';
import {ExclusiveService} from './exclusive.service';

@Component({
  selector: 'app-exclusive',
  templateUrl: './exclusive.component.html',
  styleUrls: ['./exclusive.component.css']
})
export class ExclusiveComponent implements OnInit {
  result: any;
  public news: any;
  private sub: Subscription;
  pager: any = {};
  pager1: any = {};
  price;
  rates;
  count = 0;
  category;
  constructor(private obj: ExclusiveService, private router: Router, private route: ActivatedRoute, private page: PagerService) {
  }
  ngOnInit() {

    this.route.params.subscribe(params => {

      this.AllCoins(1);
      this.AllTopCoin(1);

    });
    this.sub = this.route.params.subscribe(params => {

      if(params['category']=="Business"){
        this.GetDes();
      }
      if(params['category']=="Law"){
        this.GetDes();
      }
      if(params['category']=="Mining"){
        this.GetDes();
      }
      if(params['category']=="Technology"){
        this.GetDes();
      }
      if(params['category']=="Wallets"){
        this.GetDes();
      }
      if(params['category']=="Sponserd"){
        this.GetDes();
      }
      if(params['category']=="Press"){
        this.GetDes();
      }
      if(params['category']=="World"){
        this.GetDes();
      }
      if(params['category']=="Opinion"){
        this.GetDes();
      }

    });
  }

  AllCoins(page: number)
  {
    this.route.params.subscribe(params => {
      if (page < 1 || page > this.pager.totalPages) {
        return;
      }
      this.obj.getAllNews(params['category'], page).subscribe(data => {
        this.result = data.json()['Results'];
        for (let prod of this.result) {
          prod["image"] = prod["image"].split(" ", "1", "x");
          this.pager = this.page.getPager(data.json()['Total Result'], page);
        }
      });
    });
  }

  AllTopCoin(page:number)
  {
    this.route.params.subscribe(params => {
      // console.log('param', params['category'])
      if (page < 1 || page > this.pager.totalPages) {
        return;
      }
      this.obj.getAllTopNews(params['category'],page).subscribe(data => {
        this.rates = data.json()['Results'];
        for (let prod of this.rates) {
          prod["image"] = prod["image"].split(" ", "1", "x");
          this.pager1 = this.page.getPager(data.json()['Total Result'], page);
        }
      });
    });
  }

  clickMe(id, totalview) {
    console.log(id, totalview);

    if (totalview == null) {
      this.count += 1

    }
    else {

      this.count = totalview + 1
    }
    this.obj.putaltcoin(id, this.count).subscribe(Data => {
    });
  }

  GetDes()
  {
    this.route.params.subscribe(params => {
      console.log(params['category'])
      this.obj.getCategory(params['category']).subscribe(Data => {
        this.price = Data;
        alert('hello')
        // this.price = Array.of(this.price);
        console.log(this.price);
      })
    });
  }
}

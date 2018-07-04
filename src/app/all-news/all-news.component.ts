import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {PagerService} from '../paginator.service';
import {AllNewsService} from './all-news.service';
import {Config} from '../Config';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent implements OnInit {
  result: any;
  public news: any;
  pager: any = {};
  pager1: any = {};
  rates;
  price;
  count = 0;
  private sub: Subscription;

  constructor(private obj: AllNewsService, private router: Router, private route: ActivatedRoute, private page: PagerService) {
  }
  public Imageurlget = Config.Imageurlget;
  ngOnInit() {

    this.route.params.subscribe(params => {
      this.AllCoins(1);
      this.AllTopCoin(1);

    });
    this.sub = this.route.params.subscribe(params => {

      if(params['category']=="Bitcoin"){
        this.GetDes();
      }
      if(params['category']=="Ethereum"){
        this.GetDes();
      }
      if(params['category']=="Altcoin"){
        this.GetDes();
      }
      if(params['category']=="Blockchain"){
        this.GetDes();
      }
      if(params['category']=="Litecoin"){
        this.GetDes();
      }
      if(params['category']=="Ripple"){
        this.GetDes();
      }
      if(params['category']=="Crypto"){
        this.GetDes();
      }
      if(params['category']=="ICO"){
        this.GetDes();
      }
      if(params['category']=="BitCash"){
        this.GetDes();
      }
      if(params['category']=="Dogecoin"){
        this.GetDes();
      }
      if(params['category']=="CoinMap"){
        this.GetDes();
      }
      if(params['category']=="BitStamp"){
        this.GetDes();
      }
    });

  }
  AllCoins(page:number) {
    this.route.params.subscribe(params => {
     console.log('param', params['category'])
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.obj.getAllNews(params['category'],page).subscribe(data => {
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

      if (page < 1 || page > this.pager.totalPages)
      {
        return;
      }
      this.obj.getAllTopNews(params['category'],page).subscribe(data =>
      {
        this.rates = data.json()['Results'];
        for (let prod of this.rates)
        {
          prod["image"] = prod["image"].split(" ", "1", "x");
          this.pager1 = this.page.getPager(data.json()['Total Result'], page);
        }

      });
      });
    }

  clickMe(id,totalview)

  {
    console.log(id,totalview);

    if(totalview == null)
    {
      this.count += 1

    }
    else {

      this.count = totalview +1
    }
    this.obj.putaltcoin(id,this.count).subscribe(Data =>{
    });

  }

GetDes()
{

  this.route.params.subscribe(params => {
    console.log(params['category'])
    this.obj.getCategory(params['category']).subscribe(Data => {
      this.price = Data[0];
      this.price = Array.of(this.price);
      console.log(this.price);
    })
  });
}

}


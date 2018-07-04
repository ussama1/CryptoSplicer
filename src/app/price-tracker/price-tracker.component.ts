import { Component, OnInit, Pipe } from '@angular/core';
import { PriceTrackerService } from './price-tracker.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-price-tracker',
  templateUrl: './price-tracker.component.html',
  styleUrls: ['./price-tracker.component.css']
})
export class PriceTrackerComponent implements OnInit {
  BTC_USD: any = [];
  ETH_USD: any = [];
  BCH_USD: any = [];
  LTC_USD: any = [];
  XEM_USD: any = [];
  DASH_USD: any = [];
  BTC_EUR: any = [];
  ETH_EUR: any = [];
  LTC_EUR: any = [];
  DASH_EUR: any = [];
  BTC_GBP: any = [];
  ETH_GBP: any = [];
  ETH_BTC: any = [];
  BCH_BTC: any = [];
  LTC_BTC: any = [];
  XEM_BTC: any = [];
  DASH_BTC: any = [];
  BCH_ETH: any = [];
  XEM_ETH: any = [];
  constructor(private obj: PriceTrackerService) { }

  ngOnInit() {
this.rates();

  }

  rates(){
    this.obj.rate("btc-usd").subscribe(Data => {
      this.BTC_USD = Data;
    });
    this.obj.rate("eth-usd").subscribe(Data => {
      this.ETH_USD = Data;
    });
    this.obj.rate("bch-usd").subscribe(Data => {
      this.BCH_USD = Data;
    });
    this.obj.rate("ltc-usd").subscribe(Data => {
      this.LTC_USD = Data;
    });
    this.obj.rate("xem-usd").subscribe(Data =>{
      this.XEM_USD = Data;
    });
    this.obj.rate("dash-usd").subscribe(Data => {
      this.DASH_USD = Data;
    });
    this.obj.rate("btc-eur").subscribe(Data => {
      this.BTC_EUR = Data;
    });
    this.obj.rate("eth-eur").subscribe(Data => {
      this.ETH_EUR = Data;
    });
    this.obj.rate("ltc-eur").subscribe(Data => {
      this.LTC_EUR = Data;
    });
    this.obj.rate("dash-eur").subscribe(Data => {
      this.DASH_EUR = Data;
    });
    this.obj.rate("btc-gbp").subscribe(Data => {
      this.BTC_GBP = Data;
    });
    this.obj.rate("eth-gbp").subscribe(Data => {
      this.ETH_GBP = Data;
    });
    this.obj.rate("eth-btc").subscribe(Data => {
      this.ETH_BTC = Data;
    });
    this.obj.rate("bch-btc").subscribe(Data => {
      this.BCH_BTC = Data;
    });
    this.obj.rate("ltc-btc").subscribe(Data => {
      this.LTC_BTC = Data;
    });
    this.obj.rate("xem-btc").subscribe(Data => {
      this.XEM_BTC = Data;
    });
    this.obj.rate("dash-btc").subscribe(Data => {
      this.DASH_BTC = Data;
    });
    this.obj.rate("bch-eth").subscribe(Data => {
      this.BCH_ETH = Data;
    });
    this.obj.rate("xem-eth").subscribe(Data => {
      this.XEM_ETH = Data;
    });
  }
}

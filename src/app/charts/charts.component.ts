import { Component, OnInit } from '@angular/core';
import {ChartsService} from './charts.service';
declare const TradingView: any;
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  // constructor(private historicalBpiService: ChartsService ){}
  constructor(){}
  // public lineChartData:Array<any> = [
  //   {data:[],label: 'BTCUSD'}
  // ];
  // public lineChartLabels:Array<any> = [];
  // public lineChartOptions:any = {
  //   responsive: true
  // };
  // public lineChartColors:Array<any> = [
  //   { // grey
  //     backgroundColor: 'rgba(148,159,177,0.2)',
  //     borderColor: 'rgba(148,159,177,1)',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //   },
  //   { // dark grey
  //     backgroundColor: 'rgba(77,83,96,0.2)',
  //     borderColor: 'rgba(77,83,96,1)',
  //     pointBackgroundColor: 'rgba(77,83,96,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(77,83,96,1)'
  //   },
  //   { // grey
  //     backgroundColor: 'rgba(148,159,177,0.2)',
  //     borderColor: 'rgba(148,159,177,1)',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //   }
  // ];
  // public lineChartLegend:boolean = true;
  // public lineChartType:string = 'line';
  //
  // // events
  // public chartClicked(e:any):void {
  //   console.log(e);
  // }
  //
  // public chartHovered(e:any):void {
  //   console.log(e);
  // }

  ngOnInit(){
    // this.get_chart();

    new TradingView.widget({
      "container_id": "myWidgetContainer",
      "width": 980,
      "height": 610,
      "symbol": "BITFINEX:BTCUSD",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "White",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "hideideas": true,
      "show_popup_button": true,
      "popup_width": "1000",
      "popup_height": "650"
    });


  }



  // get_chart(){
  //   this.historicalBpiService.getBpiData().subscribe(
  //     res => {
  //       this.lineChartData[0].data.push(...Object.values(res.bpi));
  //       this.lineChartLabels.push(...Object.keys(res.bpi));
  //       console.log(this.lineChartData,this.lineChartLabels);
  //
  //     }
  //   )
  // }
}

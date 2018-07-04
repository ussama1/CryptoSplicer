import { Component, OnInit } from '@angular/core';
// import {ChatComponent} from '../chat/chat.component';
import {MatDialog} from '@angular/material';
// import {HeaderService} from '../header/header.service';
// import {GlobalService} from "../global.service";
import {SimpleGlobal} from "ng2-simple-global";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public Categories: any;
  loaded = false;
  constructor(){}
    // public dialog: MatDialog,
    // private obj: HeaderService,
    // private global: GlobalService,
    // private glb_ser: SimpleGlobal) {

    // this.global.Categories$.subscribe(
    //   data => {
    //     this.Categories = data;
    //   });
  
  ngOnInit() {
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(ChatComponent, {
  //     width: '400px',
  //     height: '530px'
  //   });
  // }

}


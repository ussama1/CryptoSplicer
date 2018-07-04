import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import  { WhyCryptosplicerComponent } from './why-cryptosplicer.component'

const whyCryptosplicer : Routes = [
  {path: '', component: WhyCryptosplicerComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(whyCryptosplicer),
  ],
  declarations: [WhyCryptosplicerComponent]
})
export class WhyCryptosplicerModule { }

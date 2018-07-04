import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {PriceTrackerComponent} from './price-tracker.component';
import {MatTabsModule} from '@angular/material/tabs';

const price: Routes = [
  { path: '', component: PriceTrackerComponent}
];

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    RouterModule.forChild(price),
    MatTabsModule
  ],
  declarations: [
    PriceTrackerComponent
  ]
})
export class PriceTrackerModule { }

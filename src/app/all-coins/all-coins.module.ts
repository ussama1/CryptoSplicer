import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {LoaderModule} from '../loader/loader.module';
import {RouterModule, Routes} from '@angular/router';
import {AllCoinsComponent} from './all-coins.component';
import {AllCoinsService} from './all-coins.service';

const AllCoins: Routes = [
  {path: '', component: AllCoinsComponent},
];

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    LoaderModule,
    RouterModule.forChild(AllCoins)
  ],
  declarations: [AllCoinsComponent],
  providers: [AllCoinsService]
})
export class AllCoinsModule { }

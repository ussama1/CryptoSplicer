import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllNewsComponent} from './all-news.component';
import {AllNewsService} from './all-news.service';
import {LoaderModule} from '../loader/loader.module';
import {MatTabsModule} from '@angular/material/tabs';
import {Routes, RouterModule} from '@angular/router';

const AllNews: Routes = [
  {path: '', component: AllNewsComponent},
];


@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    LoaderModule,
    RouterModule.forChild(AllNews),

  ],
  declarations: [AllNewsComponent],
  providers:[AllNewsService]
})
export class AllNewsModule { }

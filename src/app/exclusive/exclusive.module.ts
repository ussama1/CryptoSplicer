import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoaderModule} from '../loader/loader.module';
import {MatTabsModule} from '@angular/material/tabs';
import {Routes, RouterModule} from '@angular/router';
import {ExclusiveComponent} from './exclusive.component';
import {ExclusiveService} from './exclusive.service';

const ExclusiveNews: Routes = [
  {path: '', component: ExclusiveComponent},
];

@NgModule({
  imports: [
    CommonModule,
    LoaderModule,
    MatTabsModule,
    RouterModule.forChild(ExclusiveNews),

  ],
  declarations: [ExclusiveComponent],
  providers:[ExclusiveService]
})
export class ExclusiveModule { }

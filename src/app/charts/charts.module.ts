import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ChartsComponent} from './charts.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {LoaderModule} from '../loader/loader.module';

const ChartsRoutes: Routes = [
  {path: '', component: ChartsComponent},
];


@NgModule({
  declarations: [
    ChartsComponent
  ],

  imports: [
    CommonModule,
    ChartsModule,
    LoaderModule,
    RouterModule.forChild(ChartsRoutes),
  ],

  providers: [],
  exports: []

})

export class ChartsModul {

}

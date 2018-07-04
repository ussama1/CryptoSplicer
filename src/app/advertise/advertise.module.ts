import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AdvertiseComponent} from './advertise.component';


const ADRoutes: Routes = [
  {path: '', component: AdvertiseComponent},
];


@NgModule({
  declarations: [
    AdvertiseComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(ADRoutes),
  ],

  providers: [],
  exports: []

})

export class AdvertiseModule {

}

import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AboutComponent} from "./about.component";


const aboutRoutes: Routes = [
  {path: '', component: AboutComponent},
];


@NgModule({
  declarations: [
    AboutComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(aboutRoutes),
  ],

  providers: [],
  exports: []

})

export class AboutModule {

}

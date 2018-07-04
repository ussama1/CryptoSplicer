import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {FaqsComponent} from "./faqs.component";

const faqsRoutes: Routes = [
  { path: '', component: FaqsComponent }
];

@NgModule({
  declarations: [
    FaqsComponent
  ],

  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    MatInputModule,
    RouterModule.forChild(faqsRoutes)
  ],

  // providers: [],
  // exports: []

})

export class FaqsModule {

}

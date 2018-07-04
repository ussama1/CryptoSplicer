import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HowItWorksComponent} from "./how-it-works.component";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material';

const signupRoutes: Routes = [
  { path: '', component: HowItWorksComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    RouterModule.forChild(signupRoutes)
  ],
  declarations: [
    HowItWorksComponent
  ]
})
export class HowItWorksModule { }

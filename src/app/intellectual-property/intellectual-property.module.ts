import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {IntellectualPropertyComponent} from "./intellectual-property.component";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material';

const intellectualRoutes: Routes = [
  { path: '', component: IntellectualPropertyComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    RouterModule.forChild(intellectualRoutes)
  ],
  declarations: [
    IntellectualPropertyComponent
  ]
})
export class IntellectualPropertyModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchComponent} from './search.component';
import { MaterialModule } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from "@angular/router";

const generalsearchRoutes: Routes = [
  { path: '', component: SearchComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(generalsearchRoutes),
    MaterialModule,
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }

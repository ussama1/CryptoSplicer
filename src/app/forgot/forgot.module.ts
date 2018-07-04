import { NgModule } from '@angular/core';

import { ForgotComponent }   from './forgot.component';
import {RouterModule, Routes} from "@angular/router";
import { MaterialModule } from '../app.module';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const forgotRoutes: Routes = [
  { path: '', component: ForgotComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(forgotRoutes),
    MaterialModule,
    CommonModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
    ForgotComponent,
  ]
})
export class ForgotModule {}

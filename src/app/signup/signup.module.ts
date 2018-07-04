import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { SignupComponent }   from './signup.component';
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const signupRoutes: Routes = [
  { path: '', component: SignupComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(signupRoutes),
    MaterialModule,
    CommonModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
    SignupComponent,
  ]
})
export class SignupModule {}

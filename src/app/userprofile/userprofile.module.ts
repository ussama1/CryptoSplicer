import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {UserprofileComponent} from './userprofile.component';

const UserPro: Routes = [
  { path: '', component:UserprofileComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(UserPro)
  ],
  declarations: [
    UserprofileComponent
  ]
})
export class UserprofileModule { }

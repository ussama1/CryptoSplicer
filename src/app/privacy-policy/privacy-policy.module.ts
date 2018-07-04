import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {PrivacyPolicyComponent} from './privacy-policy.component';

const PrivacyPolicyRoutes: Routes = [
  { path: '', component:  PrivacyPolicyComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(PrivacyPolicyRoutes)
  ],
  declarations: [
    PrivacyPolicyComponent
  ]
})
export class PrivacyPolicyModule{ }

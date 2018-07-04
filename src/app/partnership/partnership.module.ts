import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {PartnershipComponent} from "./partnership.component";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material';

const partnershipRoutes: Routes = [
  { path: '', component: PartnershipComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(partnershipRoutes)
  ],
  declarations: [
    PartnershipComponent
  ]
})
export class PartnershipModule { }

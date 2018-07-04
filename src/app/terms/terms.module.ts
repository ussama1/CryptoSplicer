import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {TermsComponent} from './terms.component';

const TermsRoutes: Routes = [
  { path: '', component:  TermsComponent  }
];

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(TermsRoutes)
  ],
  declarations: [
    TermsComponent
  ]
})
export class TermsModule { }

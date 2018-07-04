import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ResetComponent} from './reset.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material';

const ResetRoutes: Routes = [
  { path: '', component: ResetComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ResetRoutes)
  ],
  declarations: [ResetComponent]
})
export class ResetModule { }

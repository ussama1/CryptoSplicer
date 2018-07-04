import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivateComponent } from './activate.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

const regRoutes: Routes = [
  { path: '', component: ActivateComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(regRoutes),
    FormsModule,
    MaterialModule
  ],
  declarations: [ActivateComponent]
})
export class ActivateModule { }


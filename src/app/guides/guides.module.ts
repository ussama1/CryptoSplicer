import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {GuidesComponent} from './guides.component';

const GuidesRoutes: Routes = [
  { path: '', component: GuidesComponent }
];

@NgModule({
  declarations: [
    GuidesComponent
  ],

  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    MatInputModule,
    RouterModule.forChild(GuidesRoutes)
  ],

  // providers: [],
  // exports: []

})

export class GuidesModule {

}

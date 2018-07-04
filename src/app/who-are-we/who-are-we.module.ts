import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {WhoAreWeComponent} from "./who-are-we.component";
import {MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material';

const whoAreWeRoutes: Routes = [
  { path: '', component: WhoAreWeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    RouterModule.forChild(whoAreWeRoutes)
  ],
  declarations: [
    WhoAreWeComponent
  ]
})
export class WhoAreWeModule { }

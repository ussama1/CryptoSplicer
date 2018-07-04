import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import {LoaderModule} from '../loader/loader.module';
import { TimeAgoPipe } from 'time-ago-pipe';

const MainpageRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    LoaderModule,
    RouterModule.forChild(MainpageRoutes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [HomeComponent, TimeAgoPipe]
})
export class HomeModule { }

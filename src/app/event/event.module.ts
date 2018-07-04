import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {LoaderModule} from '../loader/loader.module';
import {Routes, RouterModule} from '@angular/router';
import {EventComponent} from './event.component';
import {EventService} from './event.service';

const eventnews: Routes = [
  {path: '', component: EventComponent},
];


@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    LoaderModule,
    RouterModule.forChild(eventnews),


  ],
  declarations: [EventComponent],
  providers: [EventService]
})
export class EventModule { }

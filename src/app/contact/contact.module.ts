import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ContactComponent} from "./contact.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
// import { AgmCoreModule } from '@agm/core';


const contactRoutes: Routes = [
  {path: '', component: ContactComponent},
];


@NgModule({
  declarations: [
    ContactComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    // AgmCoreModule,
    RouterModule.forChild(contactRoutes),
  ],

  providers: [],
  exports: []

})

export class ContactModule{

}

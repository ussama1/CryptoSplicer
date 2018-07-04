import { NgModule } from '@angular/core';
import { LoginComponent }   from './login.component';
import {RouterModule, Routes} from "@angular/router";
import { MaterialModule } from '../app.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {RecaptchaModule,RECAPTCHA_SETTINGS,
  RecaptchaLoaderService,
  RecaptchaSettings,} from "ng-recaptcha";
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {LoaderModule} from '../loader/loader.module';

const globalSettings: RecaptchaSettings = { siteKey: '6LcOuyYTAAAAAHTjFuqhA52fmfJ_j5iFk5PsfXaU' };

const loginRoutes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes),
    MaterialModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    LoaderModule
  ],
  declarations: [
    LoginComponent,
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: globalSettings,
    },
  ],
})
export class LoginModule {}

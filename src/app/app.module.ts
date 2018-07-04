import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, NgForm, FormBuilder } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { CommonModule } from '@angular/common';
import {AuthGuard} from './auth.guard';
import {LoginService} from './login/login.service';
import {LoaderModule} from "./loader/loader.module";
import {MatFormFieldModule} from '@angular/material/form-field';
import {PreloaderService} from './serv/preloader-service';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';
import {Routing,AppRoutingProvider} from './app.routing';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
// import {AdvertiseComponent} from "./advertise/advertise.component";
import { HttpModule } from '@angular/http';
import {SignupService} from "./signup/signup.service";
import {HttpClientModule} from "@angular/common/http";
import {SimpleGlobal} from "ng2-simple-global";
import {PriceTrackerService} from './price-tracker/price-tracker.service';
import {ForgotService} from './forgot/forgot.service';

import {ActivateService} from './activate_account/activate.service';
import {ContactService} from './contact/contact.service';
import {PartnershipService} from './partnership/partnership.service';
import {HomeService} from './home/home.service';
import {PagerService} from './paginator.service';
import {HeaderService} from './header/header.service';
import {GuidesService} from './guides/guides.service';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  declarations: [],

})

export class MaterialModule {}

@NgModule({

  imports: [
    BrowserTransferStateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    Routing,
    AppRoutingProvider,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatInputModule,
    LoaderModule,
    RecaptchaModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // AdvertiseComponent
  ],
  providers: [
    FormBuilder,
    SignupService,
    SimpleGlobal,
    LoginService,
    AuthGuard,
    ForgotService,
    PriceTrackerService,
    ActivateService,
    ContactService,
    PartnershipService,
    HomeService,
    PagerService,
    NgForm,
    PreloaderService,
    HeaderService,
    GuidesService,

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})

export class AppModule { }

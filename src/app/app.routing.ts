import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// import {AppComponent} from './app.component';

export const router: Routes = [
  // {
  //   path: '',
  //   component: AppComponent,
  //   children: [

      {path: 'aboutus', loadChildren: './about/about.module#AboutModule'},
      {path: 'contact', loadChildren: './contact/contact.module#ContactModule'},
      {path: 'faqs', loadChildren: './faqs/faqs.module#FaqsModule'},
      {path: 'forgot', loadChildren: './forgot/forgot.module#ForgotModule'},
      {path: 'how-it-works', loadChildren: './how-it-works/how-it-works.module#HowItWorksModule'},
      {path: 'intellectual', loadChildren: './intellectual-property/intellectual-property.module#IntellectualPropertyModule'},
      {path: 'login', loadChildren: './login/login.module#LoginModule'},
      {path: 'partnership', loadChildren: './partnership/partnership.module#PartnershipModule'},
      {path: 'privacypolicy', loadChildren: './privacy-policy/privacy-policy.module#PrivacyPolicyModule'},
      {path: 'signup', loadChildren: './signup/signup.module#SignupModule'},
      {path: 'terms', loadChildren: './terms/terms.module#TermsModule'},
      {path: 'who-are-we', loadChildren: './who-are-we/who-are-we.module#WhoAreWeModule'},
      {path:   '', loadChildren: './home/home.module#HomeModule'},
      {path: 'UserPro', loadChildren: './userprofile/userprofile.module#UserprofileModule'},
      {path: 'price', loadChildren:'./price-tracker/price-tracker.module#PriceTrackerModule'},
      {path: 'guides', loadChildren:'./guides/guides.module#GuidesModule'},
      {path: 'advertise',loadChildren:'./advertise/advertise.module#AdvertiseModule'},
      {path: 'why-cryptosplicer',loadChildren:'./why-cryptosplicer/why-cryptosplicer.module#WhyCryptosplicerModule'},
      {path: 'reset_password/:token',loadChildren:'./reset_password/reset.module#ResetModule'},
      {path: 'activate_account/:query1',loadChildren:'./activate_account/activate.module#ActivateModule'},
      {path: 'search/:name',loadChildren:'./search/search.module#SearchModule'},
      {path: 'logout',loadChildren:'./logout/logout.module#LogoutModule'},
      {path: 'AllCoins/:category',loadChildren:'./all-coins/all-coins.module#AllCoinsModule'},
      {path: 'Event',loadChildren:'./event/event.module#EventModule'},
      {path: 'AllNews/:category',loadChildren:'./all-news/all-news.module#AllNewsModule'},
      {path:'exclusive/:category',loadChildren:'./exclusive/exclusive.module#ExclusiveModule'},
       {path:'charts',loadChildren:'./charts/charts.module#ChartsModul'},



  //  ]
  // },
];

export const AppRoutingProvider: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(router);

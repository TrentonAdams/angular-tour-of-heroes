import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule}   from '@angular/forms';

import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {AppComponent} from './app/app.component';
import {HeroService} from "./hero.service";

import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { WelcomeComponent } from './welcome/welcome.component';
import {HttpClientModule} from "@angular/common/http";
import {MockBackend} from "@angular/http/testing";
import {stubHttpProvider} from "./stub-http/stub-http-provider";
import {BaseRequestOptions, Http, HttpModule} from "@angular/http";
import {Hero} from "./hero";


@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    AppComponent,
    DashboardComponent,
    WelcomeComponent
  ],
  exports: [
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [stubHttpProvider, MockBackend, BaseRequestOptions],
  bootstrap: [AppComponent]
})
export class AppModule
{
}

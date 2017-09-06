import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule}   from '@angular/forms';

import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {AppComponent} from './app/app.component';
import {HeroService} from "./hero.service";

import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {HttpModule} from "@angular/http";
import { WelcomeComponent } from './welcome/welcome.component';
import {InMemoryDataService} from "./in-memory-data.service";
import {
  InMemoryBackendConfigArgs,
  InMemoryWebApiModule
} from "angular-in-memory-web-api";


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
    InMemoryWebApiModule.forRoot(InMemoryDataService,
      <InMemoryBackendConfigArgs>{apiBase: 'api/'}),
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule
{
}

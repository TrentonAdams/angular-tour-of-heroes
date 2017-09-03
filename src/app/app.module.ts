import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule}   from '@angular/forms';

import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {AppComponent} from './app/app.component';
import {HeroService} from "./hero.service";

import {RouterModule}   from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    AppComponent,
    DashboardComponent
  ],
  exports: [
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule
{
}

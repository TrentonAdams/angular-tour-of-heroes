import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from "./hero.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*  template: `
   <h1>{{title}}</h1>
   <h2>{{hero.name}} details!</h2>
   <div><label>id: </label>{{hero.id}}</div>
   <div>
   <label>name: </label>
   <input [(ngModel)]="hero.name" placeholder="name">
   </div>`,*/
  styleUrls: ['./app.component.css'],
  providers: [HeroService],
})
export class AppComponent implements OnInit
{
  ngOnInit(): void
  {
    this.getHeroes();
  }

  constructor(private heroService: HeroService)
  {
  }

  title = 'Tour of Heroes';
  heroes: Hero[];

  selectedHero: Hero;

  getHeroes(): void
  {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void
  {
    this.selectedHero = hero;
  }
}


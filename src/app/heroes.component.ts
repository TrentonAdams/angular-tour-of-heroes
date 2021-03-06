import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from "./hero.service";
import {Router} from "@angular/router";

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  /*  template: `
   <h1>{{title}}</h1>
   <h2>{{hero.name}} details!</h2>
   <div><label>id: </label>{{hero.id}}</div>
   <div>
   <label>name: </label>
   <input [(ngModel)]="hero.name" placeholder="name">
   </div>`,*/
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService],
})
export class HeroesComponent implements OnInit
{
  ngOnInit(): void
  {
    this.getHeroes();
  }

  constructor(private router: Router,
    private heroService: HeroService)
  {
  }

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

  gotoDetail(): void
  {
    this.router.navigate(['/detail', this.selectedHero.id])
  }
}


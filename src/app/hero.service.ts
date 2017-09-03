import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from "./hero";

@Injectable()
export class HeroService
{

  constructor()
  {
  }

  getHeroes(): Promise<Hero[]>
  {
    return new Promise(resolve =>
    {
      // Simulate server latency with delay
      setTimeout(() => resolve(HEROES), 500);
    });
  }

  getHero(id: number): Promise<Hero>
  {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

}

import {Injectable}    from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Hero} from './hero'
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map'

@Injectable()
export class HeroService
{
  private heroesUrl = 'http://localhost:3000/api/heroes';

  constructor(private http: HttpClient)
  {
  }

  getHeroes(): Observable<Hero[]>
  {
    console.log('getHeros: ', this.heroesUrl);

    return this.http.get(this.heroesUrl)
      .map(response => response as Hero[]);
  }

  private handleError(error: any): Promise<any>
  {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Observable<Hero>
  {
    const url = `${this.heroesUrl}/${id}`;
    console.log('getHero: ', url);

    return this.http.get(this.heroesUrl)
      .map(response =>
      {
        let hero = response as Hero;
        console.log(hero);
        return hero
      })
  }
}

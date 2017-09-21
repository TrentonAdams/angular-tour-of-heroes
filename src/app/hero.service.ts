import {Injectable}    from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Hero} from './hero'
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import {Http} from "@angular/http";

@Injectable()
export class HeroService
{
  private heroesUrl = 'http://localhost:3000/api/heroes';

  constructor(private http: Http)
  {
  }

  getHeroes(): Observable<Hero[]>
  {
    console.log('getHeros: ', this.heroesUrl);

    return this.http.get(this.heroesUrl)
      .map(response => {
        console.log('response: ', response);
        return response.json();
      });
  }

  private handleError(error: any): Promise<any>
  {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Observable<Hero>
  {
    let url = `${this.heroesUrl}/${id}`;
    console.log('getHero: ', url);

    return this.http.get(url)
      .map(response =>
      {
        let hero = response.json() as Hero;
        console.log('hero:', hero);
        return hero
      })
  }
}

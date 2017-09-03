import {TestBed, inject, async} from '@angular/core/testing';

import {HeroService} from './hero.service';

describe('HeroService', () =>
{
  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      providers: [HeroService]
    });
  });

  it('should be created', inject([HeroService], (service: HeroService) =>
  {
    expect(service).toBeTruthy();
  }));
  it('should contain Dr IQ', inject([HeroService], (service: HeroService) =>
  {
    expect(service).toBeTruthy();
    async(() =>
    {
      service.getHeroes().then(
        heroes => expect(heroes.filter(hero => hero.id === 18)[0].name).toEqual(
          'Dr IQ'));
    })
  }));
});

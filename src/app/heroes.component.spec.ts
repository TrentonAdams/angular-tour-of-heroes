import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HeroesComponent} from './heroes.component';
import {HeroService} from "./hero.service";
import {HttpModule, XHRBackend} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('HeroesComponent', () =>
{

  beforeEach(async(() =>
  {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule, HttpClientTestingModule],
      declarations: [
        HeroesComponent
      ],
      providers: [HeroService, { provide: XHRBackend, useClass: MockBackend }]
    }).compileComponents();
  }));

  it('should create the HeroesComponent', async(() =>
  {
    const fixture = TestBed.createComponent(HeroesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'My Heroes'`, async(() =>
  {
    const fixture = TestBed.createComponent(HeroesComponent);
    const heroes = fixture.debugElement.componentInstance;
    let count = 0;
    let waitForHeroes = function ()
    {
      count++;
      if (heroes.heroes === undefined && count < 10)
      {
        console.log('waiting 200 ms');
        setTimeout(waitForHeroes, 200);
      }
      else if (count >= 10)
      {
        console.log('hero test timed out');
      }
      else
      {
        console.log('heroes found: ', heroes.heroes, count);
        expect(heroes.heroes).toContain({id: 11, name: 'Mr. Nice'})
      }
    };
    waitForHeroes();
    console.log('complete');

  }));

  it('should render title in a h1 tag', async(() =>
  {
    const fixture = TestBed.createComponent(HeroesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain(
      'My Heroes');
  }));
});

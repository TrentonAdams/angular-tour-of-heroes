import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeroDetailComponent} from './hero-detail.component';
import {FormsModule} from "@angular/forms";
import {HeroService} from "../hero.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";

describe('HeroDetailComponent', () =>
{
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async(() =>
  {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [HeroDetailComponent],
      providers: [HeroService, ]
    })
      .compileComponents();
  }));

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () =>
  {
    expect(component).toBeTruthy();
  });
});

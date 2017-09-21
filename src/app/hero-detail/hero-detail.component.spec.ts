import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeroDetailComponent} from './hero-detail.component';
import {FormsModule} from "@angular/forms";
import {HeroService} from "../hero.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpModule, XHRBackend} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('HeroDetailComponent', () =>
{
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async(() =>
  {
    TestBed.configureTestingModule({
      imports: [
        FormsModule, RouterTestingModule, HttpModule, HttpClientTestingModule],
      declarations: [HeroDetailComponent],
      providers: [
        {provide: XHRBackend, useClass: MockBackend}, HeroService, HttpClient]
    }).compileComponents();
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

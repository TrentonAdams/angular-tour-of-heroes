import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HeroService} from "../hero.service";
import {HttpClient} from "@angular/common/http";
import {MockBackend} from "@angular/http/testing";
import {HttpModule, XHRBackend} from "@angular/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('DashboardComponent', () =>
{
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() =>
  {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule, HttpClientTestingModule],
      declarations: [DashboardComponent],
      providers: [
        {provide: XHRBackend, useClass: MockBackend}, HeroService, HttpClient]
    }).compileComponents();
  }));

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () =>
  {
    expect(component).toBeTruthy();
  });
});

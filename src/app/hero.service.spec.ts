import {TestBed, inject, async} from '@angular/core/testing';
//import request as from 'supertest';

import {HeroService} from './hero.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {Http, HttpModule, ResponseOptions, XHRBackend} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
const heroesResponse = [
  {id: 0, name: 'Zero'},
  {id: 11, name: 'Mr. Nice'},
  {id: 12, name: 'Narco'},
  {id: 13, name: 'Bombasto'},
  {id: 14, name: 'Celeritas'},
  {id: 15, name: 'Magneta'},
  {id: 16, name: 'RubberMan'},
  {id: 17, name: 'Dynama'},
  {id: 18, name: 'Dr IQ'},
  {id: 19, name: 'Magma'},
  {id: 20, name: 'Tornado'}
];

describe('HeroService', () =>
{
  //let server;
  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      imports: [HttpModule, HttpClientTestingModule],
      providers: [
        {provide: XHRBackend, useClass: MockBackend},
        HeroService, HttpClient]
    });
    //server = require('../../app')();
  });


  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) =>
  {
  }));

  it('should be created', inject([HeroService], (service: HeroService) =>
  {
    expect(service).toBeTruthy();
  }));

  it('heroes service responds',
    inject([HeroService, XHRBackend],
      (heroService: HeroService, mockBackend) =>
      {
        mockBackend.connections.subscribe((connection) =>
        {
        });
        heroService.getHeroes().subscribe(
          data => expect(data[0]['name']).toEqual('Zero'));

        mockBackend.connections.subscribe((connection) =>
        {
          connection.mockRespond((new Response(
            new ResponseOptions({body: JSON.stringify(heroesResponse)}))))
        })
      }));

  /*  it('/ redirects to /angular/index.html', function (done)
   {
   console.log('get /');
   var tResponse = {};
   request(server).get('/')
   .expect('Location', '/angular/index.html').expect(302, done);
   //$httpBackend.flush();
   });*/

  /*  it('/api-keys/314159 (post)', function (done)
   {
   request(server).post('/api-keys').send(
   {"keyId": 314159, "verificationCode": "2323254575745"})
   .expect('Content-Type', /json/).expect(function (res)
   {
   if (res.body.keyId !== 314159 ||
   res.body.verificationCode !== "2323254575745")
   throw new Error('key not found');
   }).expect(201, done);
   });

   it('/api-keys/ (get)', function (done)
   {
   request(server).get('/api-keys/')
   .expect('Content-Type', /json/).expect(function (res)
   {
   if (res.body[314159].verificationCode !== "2323254575745")
   throw new Error('key not found');
   }).expect(200, done);
   });

   it('/api-keys/314159 (get)', function (done)
   {
   request(server).get('/api-keys/314159')
   .expect('Content-Type', /json/).expect(function (res)
   {
   if (res.body.keyId !== 314159 ||
   res.body.verificationCode != "2323254575745")
   throw new Error('key not found');
   }).expect(200, done);
   });

   it('/api-keys/314159 (delete)', function (done)
   {
   request(server).delete('/api-keys/314159').expect('Content-Type',
   /json/).expect(function (res)
   {
   if (res.body.keyId != 314159 ||
   res.body.verificationCode !== "2323254575745")
   throw new Error('key not found');
   }).expect(200, done);
   });

   it('404 everything else', function testPath(done)
   {
   request(server)
   .get('/foo/bar')
   .expect(404, done);
   });*/
});

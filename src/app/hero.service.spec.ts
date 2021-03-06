import {TestBed, inject, async, fakeAsync, tick} from '@angular/core/testing';
//import request as from 'supertest';

import {HeroService} from './hero.service';
import {
  Response, BaseRequestOptions, Http, HttpModule, ResponseOptions,
  XHRBackend, ConnectionBackend

} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";
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
      providers: [
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (backend: ConnectionBackend,
            defaultOptions: BaseRequestOptions) =>
          {
            return new Http(backend, defaultOptions);
          }
        },
        {provide: MockBackend, useClass: MockBackend},
        {provide: BaseRequestOptions, useClass: BaseRequestOptions},
        {provide: HeroService, deps: [Http], useClass: HeroService}
      ]
    });
    //server = require('../../app')();
  });


  it('should be created', inject([HeroService], (service: HeroService) =>
  {
    expect(service).toBeTruthy();
  }));

  it('service.getHeroes() should return heroes',
    inject([HeroService, MockBackend],
      fakeAsync((heroService: HeroService, mockBackend: MockBackend) =>
      {
        let tested = false;
        mockBackend.connections.subscribe((connection: MockConnection) =>
        {
          console.log('request: ', connection.request);
          let heroRegex = new RegExp('.+\/api\/heroes\/(\\d*)');

          if (connection.request.url.match(heroRegex))
          {
            console.log('regex: ', connection.request.url.match(heroRegex));
            let id = Number(connection.request.url.match(heroRegex)[1]);
            expect(id).toEqual(13);
            connection.mockRespond((new Response(
              new ResponseOptions(
                { // array find by id with functional expression.
                  body: heroesResponse.find(row => row.id == id),
                  status: 200
                }))));
          }
          else if (new RegExp('.+/api/heroes').test(connection.request.url))
          {
            connection.mockRespond((new Response(
              new ResponseOptions(
                {body: heroesResponse, status: 200}))));
          }
        });

        heroService.getHeroes().then(
          data =>
          {
            tested = true;
            console.log('data: ', data);
            let count = 0;
            expect(data.length).toEqual(11);
            expect(data[count++]['name']).toEqual('Zero');
            expect(data[count++]['name']).toEqual('Mr. Nice');
            expect(data[count++]['name']).toEqual('Narco');
            expect(data[count++]['name']).toEqual('Bombasto');
            expect(data[count++]['name']).toEqual('Celeritas');
            expect(data[count++]['name']).toEqual('Magneta');
            expect(data[count++]['name']).toEqual('RubberMan');
            expect(data[count++]['name']).toEqual('Dynama');
            expect(data[count++]['name']).toEqual('Dr IQ');
            expect(data[count++]['name']).toEqual('Magma');
            expect(data[count++]['name']).toEqual('Tornado');
          });
        tick(); // waits for calls to complete
        expect(tested).toBeTruthy('the http test was not ran due to ' +
          'incorrect testing code');

      })));

  it('heroes service.getHero(id: String)',
    inject([HeroService, MockBackend],
      fakeAsync((heroService: HeroService, mockBackend:MockBackend) =>
      {
        let tested = false;
        mockBackend.connections.subscribe((connection: MockConnection) =>
        {
          console.log('request: ', connection.request);
          let heroRegex = new RegExp('.+\/api\/heroes\/(\\d*)');

          if (connection.request.url.match(heroRegex))
          {
            console.log('regex: ', connection.request.url.match(heroRegex));
            let id = Number(connection.request.url.match(heroRegex)[1]);
            expect(id).toEqual(13);
            connection.mockRespond((new Response(
              new ResponseOptions(
                { // array find by id with functional expression.
                  body: heroesResponse.find(row => row.id == id),
                  status: 200
                }))));
          }
          else if (new RegExp('.+/api/heroes').test(connection.request.url))
          {
            connection.mockRespond((new Response(
              new ResponseOptions(
                {body: heroesResponse, status: 200}))));
          }
        });

        heroService.getHero(13).then(
          data =>
          {
            tested = true;
            console.log('hero-data: ', data);
            expect(data['name']).toEqual('Bombasto');
          });
        tick(); // waits for calls to complete
        expect(tested).toBeTruthy('the http test was not ran due to ' +
          'incorrect testing code');
      })));

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

/*
 Credits
 e2e
 https://paucls.wordpress.com/2017/01/03/developing-with-a-stub-backend-on-angular-2/


 https://blog.thoughtram.io/angular/2016/11/28/testing-services-with-http-in-angular-2.html
 */
import {
  Http,
  BaseRequestOptions,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';

import {MockBackend, MockConnection} from '@angular/http/testing';

import {environment} from '../../environments/environment';

export let stubHttpProvider = {
  provide: Http,
  deps: [MockBackend, BaseRequestOptions, XHRBackend],
  useFactory: stubHttpFactory
};
/**
 * Provider to allow the use of a stub backend instead of a real Http service for backend-less development.
 */
export function stubHttpFactory (mockBackend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
  {
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

    if (!environment.stubBackend)
    {
      console.log('Configuring real Http backend...');
      return new Http(realBackend, options);
      // discontinue setting up MockBackend/MockConnection.
    }

    console.log('Configuring stub Http backend...');

    mockBackend.connections.subscribe((connection: MockConnection) =>
    {

      // wrap in timeout to simulate server api call
      setTimeout(() =>
      {

        console.log('request: ', connection.request);
        let heroRegex = new RegExp('.+\/api\/heroes\/(\\d*)');

        if (connection.request.url.match(heroRegex))
        {
          console.log('regex: ', connection.request.url.match(heroRegex));
          let id = Number(connection.request.url.match(heroRegex)[1]);
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
      }, 500);
    });

    return new Http(mockBackend, options);
  }
}

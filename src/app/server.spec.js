var request = require('request');

console.log('HELLO');
describe('loading express', function ()
{
  var server;
  beforeAll(function ()
  {
    //server = require('../app');
    // console.log('', server);
  });
  afterAll(function ()
  {
    //server.close();
  });

  describe("testing /api/users endpoint", () =>
  {
    let data = {status: '', body: ''};
    beforeAll((done) =>
    {
      console.log('jasmine timeout: ', jasmine.DEFAULT_TIMEOUT_INTERVAL);
      request.get("http://localhost:3000/api/users", (error, response, body) =>
      {
        console.log('error ', error, response, body);
        data.status = response.statusCode;
        data.body = body;
        done();
      });
    });

    it('/api/users/ (get)', () =>
    {
      expect(data.status).toBe('200');
    });
  });
});

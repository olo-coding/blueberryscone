var supertest = require('supertest');
var request = supertest('localhost:3000');

describe('Source API', function () {
  it('GET /', function (done) {
    request
      .get('/')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });

  it('GET /sources', function (done) {

  })
})

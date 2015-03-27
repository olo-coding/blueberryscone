var supertest = require('supertest');
var request = supertest('localhost:3000');

describe('TODO API', function () {
  it('GET /', function (done) {
    request
      .get('/')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
})

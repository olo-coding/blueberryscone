var test = require('unit.js');

var source = require('../source_mock');

var mock = source();

describe('Test source mock', function() {
  it ('dont have source', function() {
    test.assert(!mock.hasSource('aaa'));
  });
});

var test = require('unit.js');

var source = require('../source_mock');

var mock = source();

var sampleSource = "{\"file\":\"sample\",\"source\":\"object HelloWorld { def main(args: Array[String]) { println(\\\"Hello, world!\\\") } }\",\"entities\":[\"Array\",\"String\",\"println\"]}";

describe('Test source mock', function() {
  it ('dont have source', function() {
    test.assert(!mock.hasSource('aaa'));
  });
  it ('have source', function() {
    test.assert(mock.hasSource('sample'));
  });
  it ('get source', function() {
    test.string(mock.getSource('sample')).is(sampleSource);
  });
  it ('get source json object', function() {
    var json = mock.getSourceJson('sample');
    test.string(JSON.stringify(json)).is(sampleSource);
  });
  it ('get entity', function() {
    var json = mock.getSourceJson('sample');
    var entities = json['entities'];
    test.string(entities[0]).is('Array');
    test.string(entities[1]).is('String');
    test.string(entities[2]).is('println');
  });
  it ('get entity url', function() {
    var json = mock.getSourceJson('sample');
    var entities = json['entities'];
    var arrayEntityJson = mock.getEntityJson(entities[0]);
    test.string(arrayEntityJson['url']).is('http://www.scala-lang.org/api/current/#scala.Array');
  });
});

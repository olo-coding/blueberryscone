var test = require('unit.js');

var source = require('../source_mock');

var sourceMock = source();

var sampleSource = "{\"file\":\"sample\",\"source\":\"object HelloWorld { def main(args: Array[String]) { println(\\\"Hello, world!\\\") } }\",\"entities\":[\"Array\",\"String\",\"println\"]}";
var sampleAll = "{\"file\":\"sample\",\"source\":\"object HelloWorld { def main(args: Array[String]) { println(\\\"Hello, world!\\\") } }\",\"entities\":[\"Array\",\"String\",\"println\"],\"references\":[{\"url\":\"http://www.scala-lang.org/api/current/#scala.Array\"},{\"url\":\"http://www.scala-lang.org/api/current/#scala.Predef$\"},{\"url\":\"http://www.scala-lang.org/api/current/#scala.Console$\"}]}";

describe('Test sourceMock', function() {
  it ('dont have source', function() {
    test.assert(!sourceMock.hasSource('aaa'));
  });

  it ('have source', function() {
    test.assert(sourceMock.hasSource('sample'));
  });

  it ('get source json object', function() {
    var json = sourceMock.getSource('sample');
    test.string(JSON.stringify(json)).is(sampleSource);
  });

  it ('get entity', function() {
    var json = sourceMock.getSource('sample');
    var entities = json['entities'];
    test.string(entities[0]).is('Array');
    test.string(entities[1]).is('String');
    test.string(entities[2]).is('println');
  });

  it ('get entity url', function() {
    var json = sourceMock.getSource('sample');
    var entities = json['entities'];
    var arrayEntity = sourceMock.getEntity(entities[0]);
    test.string(arrayEntity['url']).is('http://www.scala-lang.org/api/current/#scala.Array');
  });

  it ('get entities size', function() {
    var size = sourceMock.getEntitySize();
    test.assert(size===3);
  });

  it ('get source list', function() {
    var sourceList = sourceMock.getSourceList();
    test.string(sourceList[0]).is('sample');
    test.string(sourceList[1]).is('test');
  });
});

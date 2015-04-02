var test = require('unit.js');

var source = require('../source_mock');

var mock = source();

var sampleSource = "{\"file\":\"sample\",\"source\":\"object HelloWorld { def main(args: Array[String]) { println(\\\"Hello, world!\\\") } }\",\"entities\":[\"Array\",\"String\",\"println\"]}";
var sampleAll = "{\"file\":\"sample\",\"source\":\"object HelloWorld { def main(args: Array[String]) { println(\\\"Hello, world!\\\") } }\",\"entities\":[\"Array\",\"String\",\"println\"],\"references\":[{\"url\":\"http://www.scala-lang.org/api/current/#scala.Array\"},{\"url\":\"http://www.scala-lang.org/api/current/#scala.Predef$\"},{\"url\":\"http://www.scala-lang.org/api/current/#scala.Console$\"}]}";

describe('Test source mock', function() {
  it ('dont have source', function() {
    test.assert(!mock.hasSource('aaa'));
  });

  it ('have source', function() {
    test.assert(mock.hasSource('sample'));
  });

  it ('get source json object', function() {
    var json = mock.getSource('sample');
    test.string(JSON.stringify(json)).is(sampleSource);
  });

  it ('get entity', function() {
    var json = mock.getSource('sample');
    var entities = json['entities'];
    test.string(entities[0]).is('Array');
    test.string(entities[1]).is('String');
    test.string(entities[2]).is('println');
  });

  it ('get entity url', function() {
    var json = mock.getSource('sample');
    var entities = json['entities'];
    var arrayEntity = mock.getEntity(entities[0]);
    test.string(arrayEntity['url']).is('http://www.scala-lang.org/api/current/#scala.Array');
  });

  it ('get all json', function() {
    var json = mock.get('sample');
    test.string(JSON.stringify(json)).is(sampleAll);
  });

  /* by Rachel */
  it ('get entity map', function() {
    var entities = mock.getEntityMap();
    test.assert(entities.has('Array'));
    test.assert(entities.has('String'));
    test.assert(entities.has('println'));
  });  

  /* by Rachel */
  it ('get entities size', function() {
    var size = mock.getEntitySize();
    test.assert(size===3);
  });


});

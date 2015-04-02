var test = require('unit.js');

var source = require('../source_mock');
var builder = require('../source_builder');

var sourceMock = source();
var sourceBuilder = builder(sourceMock);

var sampleAll = "{\"file\":\"sample\",\"source\":\"object HelloWorld { def main(args: Array[String]) { println(\\\"Hello, world!\\\") } }\",\"entities\":[\"Array\",\"String\",\"println\"],\"references\":[{\"url\":\"http://www.scala-lang.org/api/current/#scala.Array\",\"name\":\"Array\"},{\"url\":\"http://www.scala-lang.org/api/current/#scala.Predef$\",\"name\":\"String\"},{\"url\":\"http://www.scala-lang.org/api/current/#scala.Console$\",\"name\":\"println\"}]}";

describe('Test SourceBuilder', function() {
  it ('non-exist source name', function() {
    test.assert(sourceBuilder.build('aaa') === null);
  });

  it ('exist source', function() {
    var json = sourceBuilder.build('sample');
    test.string(JSON.stringify(json)).is(sampleAll);
  });
});

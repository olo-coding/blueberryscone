HashMap = require('hashmap').HashMap

module.exports = function () {
  return new SourceTable();
}

var sampleSource = {
  file:'sample',
  source:'object HelloWorld { def main(args: Array[String]) { println(\"Hello, world!\") } }',
  entities:['Array','String','println']
};

var arrayEntity = {
  url:'http://www.scala-lang.org/api/current/#scala.Array'
};
var stringEntity = {
  url:'http://www.scala-lang.org/api/current/#scala.Predef$'
};
var printlnEntity = {
  url:'http://www.scala-lang.org/api/current/#scala.Console$'
};

function SourceTable() {
  this.sourceMap = new HashMap();
  this.sourceMap.set("sample", sampleSource);
  this.entityMap = new HashMap();
  this.entityMap.set("Array", arrayEntity);
  this.entityMap.set("String", stringEntity);
  this.entityMap.set("println", printlnEntity);
}

SourceTable.prototype.hasSource = function(name) {
  return this.sourceMap.has(name);
}

SourceTable.prototype.getSource = function(name) {
  return JSON.stringify(this.sourceMap.get(name));
}

SourceTable.prototype.getSourceJson = function(name) {
  return this.sourceMap.get(name);
}

SourceTable.prototype.getEntityJson = function(entity) {
  return this.entityMap.get(entity);
}

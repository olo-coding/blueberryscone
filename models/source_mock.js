HashMap = require('hashmap').HashMap

module.exports = function () {
  return new SourceTable();
};

var sampleSource = {
  file:'sample',
  source:'object HelloWorld { def main(args: Array[String]) { println(\"Hello, world!\") } }',
  entities:['Array','String','println']
};

var testSource = {
  file:'test',
  source:'test source',
  entities:['Array','Unknown']
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
  this.sourceMap_ = new HashMap();
  this.sourceMap_.set("sample", sampleSource);
  this.sourceMap_.set("test", testSource);
  this.entityMap_ = new HashMap();
  this.entityMap_.set("Array", arrayEntity);
  this.entityMap_.set("String", stringEntity);
  this.entityMap_.set("println", printlnEntity);
}

function copyObj(obj) {
  return JSON.parse(JSON.stringify(obj));
}

SourceTable.prototype.hasSource = function(name) {
  return this.sourceMap_.has(name);
}

SourceTable.prototype.getSource = function(name) {
  return copyObj(this.sourceMap_.get(name));
}

SourceTable.prototype.getEntity = function(entity) {
  return copyObj(this.entityMap_.get(entity));
}

SourceTable.prototype.getEntitySize = function() {
  return this.entityMap_.keys().length;
}

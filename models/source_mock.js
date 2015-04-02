HashMap = require('hashmap').HashMap

module.exports = function () {
  return new SourceTable();
};

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
  return this.sourceMap.get(name);
}

SourceTable.prototype.getEntity = function(entity) {
  return this.entityMap.get(entity);
}

/* by Rachel */
SourceTable.prototype.getEntitySize = function() {
  return this.entityMap.keys().length;
}

/* by Rachel */
SourceTable.prototype.getEntityMap = function() {
  return this.entityMap;
}

SourceTable.prototype.get = function(name) {
  var source = this.getSource(name);
  var entityArray = [];
  var count = 0;
  source['entities'].forEach(function(entity) {
    entityArray.push(this.getEntity(entity));
  }, this);
  source['references'] = entityArray;
  return source;
}

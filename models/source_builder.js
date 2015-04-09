module.exports = function (source) {
  return new SourceBuilder(source);
};

function SourceBuilder(source) {
  this.source_ = source;
}

SourceBuilder.prototype.build = function(name) {
  if (!this.source_.hasSource(name)) {
    return null;
  }
  var source = this.source_.getSource(name);
  var entityArray = [];
  var count = 0;
  source['entities'].forEach(function(entityName) {
    var entity = this.source_.getEntity(entityName);
    if (entity) {
      entity.name = entityName;
      entityArray.push(entity);
    }
  }, this);
  source['references'] = entityArray;
  return source;
}

module.exports = function () {
  return new SourceTable();
}

function SourceTable() {
}

SourceTable.prototype.hasSource = function(name) {
  return false;
}

SourceTable.prototype.getSource = function(name) {
  return '';
}

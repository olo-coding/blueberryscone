var source = require('../models/source_mock')();

exports.show = function (req, res) {
  console.log('show');
  res.json(source.getSource('sample'));
};

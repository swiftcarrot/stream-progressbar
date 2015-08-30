var PassThrough = require('stream').PassThrough;
var ProgressBar = require('progress');

module.exports = function(tokens, options) {
  var pt = new PassThrough();
  options = options || {};

  pt.on('pipe', function(stream) {
    stream.on('response', function(res) {
      var total = parseInt(res.headers['content-length'], 10);
      options.total = total;
      var bar = new ProgressBar(tokens, options);

      pt.on('data', function(chunk) {
        bar.tick(chunk.length);
      });
    });
  });

  return pt;
};


var PassThrough = require('stream').PassThrough;
var ProgressBar = require('progress');

module.exports = function(tokens, options) {
  options = options || {};

  var pt = new PassThrough(options);
  var total = options.total;

  pt.on('pipe', function(stream) {
    if (total) {
      var bar = new ProgressBar(tokens, options);
      pt.on('data', function(chunk) {
        bar.tick(chunk.length);
      });
    } else {
      stream.on('response', function(res) {
        var total = parseInt(res.headers['content-length'], 10);
        options.total = total;
        var bar = new ProgressBar(tokens, options);

        pt.on('data', function(chunk) {
          bar.tick(chunk.length);
        });
      });
    }
  });

  return pt;
};

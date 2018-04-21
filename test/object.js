var stream = require('stream');
var progress = require('../');

// Discarding output stream:
var setNext = setImmediate || function (f) { setTimeout(f, 0); }
function Sink(opts) {
  if (!(this instanceof Sink))
    return new Sink(opts);
  
  stream.Writable.call(this, opts);
}

Sink.prototype = Object.create(stream.Writable.prototype);
Sink.prototype.constructor = Sink;
Sink.prototype._write = function _write(chunk, encoding, cb) {
  setNext(cb);
}

// Test running in object mode:
var testData = [{}, {}, {}, {}, {}];
var readable = new stream.Readable({ objectMode: true });
readable
  .pipe(new progress(':bar', { objectMode: true, total: testData.length }))
  .pipe(new Sink({ objectMode: true }));

testData.forEach(function (d) {
  readable.push(d);
});
readable.push(null);

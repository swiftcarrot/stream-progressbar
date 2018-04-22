var fs = require('fs');
var progress = require('../');

var filename = '10mb.test';
var stat = fs.statSync(filename);

fs.createReadStream(filename)
  .pipe(progress(':total', {total: stat.size}))
  .pipe(fs.createWriteStream('10mb.copy.test'));

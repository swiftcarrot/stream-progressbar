var fs = require('fs');
var progress = require('./');
var request = require('request');

request('http://cachefly.cachefly.net/10mb.test')
  .pipe(progress(':bar'))
  .pipe(fs.createWriteStream('10mb.test'));

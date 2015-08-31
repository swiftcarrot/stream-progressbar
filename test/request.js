var fs = require('fs');
var request = require('request');
var progress = require('../');

request('http://cachefly.cachefly.net/10mb.test')
  .pipe(progress(':bar'))
  .pipe(fs.createWriteStream('10mb.test'));

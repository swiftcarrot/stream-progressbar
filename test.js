var progress = require('./');
var request = require('request');

request('http://cachefly.cachefly.net/10mb.test').pipe(progress(':bar'));
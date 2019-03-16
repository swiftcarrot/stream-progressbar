# stream-progressbar

[![Greenkeeper badge](https://badges.greenkeeper.io/wangzuo/stream-progressbar.svg)](https://greenkeeper.io/)

Simple progress bar for node stream with [progress](https://www.npmjs.com/package/progress)
``` sh
npm install stream-progressbar
```
#### Usage
``` javascript
var fs = require('fs');
var request = require('request');
var progress = require('stream-progressbar');

request('http://cachefly.cachefly.net/10mb.test')
  .pipe(progress(':bar'))
  .pipe(fs.createWriteStream('10mb.test'));
```
#### License
MIT

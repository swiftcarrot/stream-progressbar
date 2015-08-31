# stream-progressbar
Simple progress bar for node stream
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
**Notice:** This module only supports request stream now.
#### License
MIT

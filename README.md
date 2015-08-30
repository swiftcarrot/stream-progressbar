# stream-progressbar
Simple progress bar for node stream
``` sh
npm install stream-progressbar
```
#### Usage
``` javascript
var progress = require('stream-progressbar');
var request = require('request');

request('http://cachefly.cachefly.net/10mb.test').pipe(progress(':bar'));
```
**Notice:** This module only supports request stream now.
#### License
MIT

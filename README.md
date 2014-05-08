trace
=====

  tiny trace utility inspired by **[debug](http://github.com/visionmedia/debug)** and built
  originally for webrtc **[peer](http://github.com/bredele/peer)**.

## Installation

with [component](http://github.com/component/component):

	$ component install bredele/trace
	

## Usage

  With trace you simply invoke the exported function with a name to generate your log function with millisecond diffs based on performance.

```js
var trace = require('trace')('peer');
trace('connection');
```

  Trace doesn't provide any decorators and is based on an emitter. You can listen the logs locally or send them to a server:

```js
var trace = require('trace');
trace.on('log', function(name, ms, str) {
	// do something
});
trace.on('log peer', function(ms, str) {
	// do something
});
```

## License

The MIT License (MIT)

Copyright (c) 2014 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

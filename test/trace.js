
/**
 * Test dependencies.
 */

var trace = require('trace');

// trace.on('log', function(name, str, ms) {
// 	console.log(arguments);
// });

trace.debug('test,other');

var debug = trace('test');

var i = 0;
var interval = setInterval(function() {
	if(i === 10) clearInterval(interval);
	debug('coucou');
  i++;
}, 100);


var other = trace('other');

var l = 0;
var otherInterval = setInterval(function() {
	if(l === 10) clearInterval(otherInterval);
	other('hello');
  l++;
}, 10);
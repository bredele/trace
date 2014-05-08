
/**
 * Module dependencies.
 * @api private
 */

var Emitter = require('emitter');


/**
 * Expose 'trace'
 */

module.exports = trace;


/**
 * The currently active trace mode names.
 */

var names = {};


/**
 * trace constructor.
 * @api public
 */

function trace(name) {

  return function(str) {
    var curr = performance.now();
    var ms = curr - (names[name] || curr);
    names[name] = curr;
    trace.emit('log', name, ms, str);
    trace.emit('log ' + name, ms, str);
  };
}


// trace is a global emitter

Emitter(trace);



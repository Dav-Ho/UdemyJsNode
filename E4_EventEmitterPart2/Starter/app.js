var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
	console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function() {
	console.log('What are you up to?');
});

emtr.on(eventConfig.SALUTE, function() {
	console.log('This is a short cut.');
});

console.log('Hello!');
emtr.emit('greet');

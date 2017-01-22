var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function() {
	console.log('Somewhere, someone said hello.');
});


console.log('Hello!');
emtr.emit('greet');

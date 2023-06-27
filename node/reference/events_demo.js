const EventEmitter = require('events');

//create class
class MyEmitter extends EventEmitter { }

// init obj
const myEmitter = new MyEmitter();

// event listener
myEmitter.on('event', () => console.log('event fired!'));


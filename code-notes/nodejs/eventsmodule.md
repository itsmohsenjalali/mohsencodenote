---
title : Events Module
tags:
  - NodeJS
emoji: 🟩
---
# What is Event ?

A signal that something has happened.

# Events Module

EventEmitter is one of the core classes in Node that allows us to raise (emit) and handle events. Several built-in classes in Node derive from EventEmitter.

```JS
const EventEmitter = require('events');
const emitter = new EventEmitter();

// register a listener
emitter.on('messageLogged', function () {
    console.log("Listener called");
})

// raise an event
emitter.emit('messageLogged');

```
## Note
Emit function is synchronous then we should register listener before call emit function.

# Events Argument
Sometimes we want to pass data about the event to the listener, we can do it with the below way.

```JS
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', function (arg) { // e,eventArg
    console.log("Listener called", arg);
})

emitter.emit('messageLogged', { id: 1, url: "http://" });

```
## Note
In ES6 we have an arrow function we can use like the below sample

```JS
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', (arg) => { // Arrow Function
    console.log("Listener called", arg);
})

emitter.emit('messageLogged', { id: 1, url: "http://" });

```
# Extend From Events Class
In the real world, we don't use the Events class directly instead we make classes that extend from Events class.
To create a class with the ability to raise events, we should extend EventEmitter:

```JS
class Logger extends EventEmitter {
}
```

See the belwo sample:

logger.js
```JS
const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        console.log(message)
        this.emit('messageLogged', { id: 1, url: "http://" });
    }

}

module.exports = Logger;
```
app.js
```JS
const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg) => { // e,eventArg
    console.log("Listener called", arg);
})

logger.log("helllo")
```

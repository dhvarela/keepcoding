"use strict";

var events = require('events');
var myEmitter = new events.EventEmitter();

myEmitter.on('llamar telefono', ringPhone);
myEmitter.on('llamar telefono', vibratePhone);

function ringPhone(quien) {
    if (quien == 'mom') {
        return;
    }
    console.log('Ring ring')
}

function vibratePhone() {
    console.log('brr', 'brr');
}

myEmitter.emit('llamar telefono', 'mom');
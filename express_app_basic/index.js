"use strict";

var express = require('express');
var app = express();

var morgan = require('morgan');

app.use(morgan('dev'));

app.get('/',function(req,res) {
    console.log('request to /');
    res.send('Hello world');
});

var server = app.listen('3114', function(){
    var port = server.address().port;
    console.log('Server starts at port ');
});


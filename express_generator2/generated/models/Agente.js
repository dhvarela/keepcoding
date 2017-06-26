"use strict";

var mongoose =  require('mongoose');

var agenteSchema = mongoose.Schema({
    name: String,
    age: Number
});

mongoose.model('Agente', agenteSchema);
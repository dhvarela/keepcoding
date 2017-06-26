"use strict";

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Agente = mongoose.model('Agente');

// recuperar lista de agentes
router.get('/', function(req, res, next) {
    Agente.find().exec(function(err, list) {
        if (err) {
            next(err);
            return;
        }

        res.json({ok: true, list: list});
    })
});

// crear agente
router.post('/', function(req, res, next){
    console.log(req.body);
    var agente = new Agente(req.body);
    agente.save(function(err,agenteGuardado){
        if (err) {
            return next(err);
        }
        res.json({ok:true, agente: agenteGuardado});
    });
});

// actualizar agente
router.put('/:id', function(req, res, next){
    var id = req.params.id;
    Agente.update({_id: id}, req.body, function(err, agente) {
        if (err) {
            return next(err);
        }
        res.json({ok:true, agente: agente});
    });
});


// borrar agente
router.delete('/:id', function (req, res, next) {
    var id = req.params.id;
    Agente.remove({_id: id}, function(err, result){
        if (err) {
            return next(err);
        }
        res.json({ok: true, result: result});
    });
});


module.exports = router;
/**
 * Created by daniel on 15/06/17.
 */

"use strict";

var express = require('express');
var router = express.Router();

router.use(function(req, res, next){
    console.log('middleware client route');
    next();
});

router.get('/', function(req, res, next) {
    console.log('req.query: '+req.query.name);
    res.send('clients response');
});

router.get('/:id', function(req, res, next) {
    console.log(req.params);
    res.send('parameter ' +req.params.id + ' received');
});

router.post('/', function(req, res, next){
    console.log('req.body: ' + req.body.num);
    res.json({received: req.body.num });
});

module.exports = router;
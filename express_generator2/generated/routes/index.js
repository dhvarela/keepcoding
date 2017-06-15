var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var second = (new Date()).getSeconds();

  res.render('index', {
    title: 'Express',
    parrafo: '<p> injecting code</p>',
    condition: {
      second: second,
      estado: second % 2 === 0
    },
    users: [{ name: 'Marta'}, { name: 'Alex'}, { name: 'Legolas'} ]
  });
});

module.exports = router;

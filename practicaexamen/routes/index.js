var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Calculadora', function(req, res, next) {
  res.render('Calculadora', { });
});

router.post('/Calculadora', function(req, res, next) {
  req.body.Suma= parseFloat(req.body.txtNumero1) + parseFloat(req.body.txtNumero2);
  req.body.Resta= parseFloat(req.body.txtNumero1) - parseFloat(req.body.txtNumero2);
  req.body.Multi= parseFloat(req.body.txtNumero1) * parseFloat(req.body.txtNumero2);
  req.body.Division= parseFloat(req.body.txtNumero1) / parseFloat(req.body.txtNumero2);
  res.render('Calculadora', req.body);
});


module.exports = router;

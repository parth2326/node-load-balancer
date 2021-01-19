var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.json({
    port:process.env.PORT
  })
  res.render('index', { title: 'Express' });
});

module.exports = router;

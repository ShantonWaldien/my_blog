var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/create', function(req, res, next) {
  res.render('create', {page:'create', menuId:'create'});
});

router.get('/view', function(req, res, next) {
  res.render('view', {page:'view', menuId:'view'});
});

router.get('/', function (req, res, next) {

  let data = {
      title: 'All Pokemon',
      pokemon: Pokemon, 
      message: false,
  }

  res.render('index', data);

});
module.exports = router;


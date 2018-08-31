var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session){
    console.log(req.session.user);
    res.render('admin', { user:req.session.user});
  }
});

module.exports = router;
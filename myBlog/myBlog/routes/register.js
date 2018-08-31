var express = require('express');
var router = express.Router();
import {newUser} from '../controllers/UserController';
import {SUCCESS, FAILED} from '../configs/config';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.post('/', async(req,res) => {
  const {username,password,image,repassword} = req.body;
  try {
    if (username && password === repassword) {
      const newbie = await newUser(req.body); // Validate xong, tao user
     res.redirect('login')
    } else {
      res.json({
        result: FAILED,
        data: {},
        message: `Register failed!`
      });
    }
  } catch (error) {
    res.json({
      result: FAILED,
      data: {},
      message: `Register failed! Error: ${error}.`
    });
  }
});

module.exports = router;

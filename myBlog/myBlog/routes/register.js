var express = require('express');
var router = express.Router();
import * as UserController from '../controllers/UserController';
// import {SUCCESS, FAILED, REGISFAILED} from '../configs/config';
import * as Message from '../configs/config';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { Error2: "" });
});


//REGISTER
router.post('/', async(req,res) => {
  const {username,password,image,repassword} = req.body;
  try {
    const updateSt = await UserController.updateStatus(req.body,"offline");
    const newbie = await UserController.newUser(req.body);
  //  console.log(newbie)
   if (!newbie) { // if newbie tra ve null ---> truong hop da co username
      res.render("register", {Error2: Message.REGISFAILED})
   } else if(password === repassword) {
     res.redirect("login")
   }
   else if(password != repassword) {
     res.render("register", {Error2: Message.REGISNOTMATCH})
   }
  } catch (error) {
    res.json({
      result: Message.FAILED,
      data: {},
      message: `Register failed! Error: ${error}.`
    });
  }
});

module.exports = router;

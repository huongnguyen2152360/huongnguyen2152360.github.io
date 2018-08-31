var express = require('express');
var router = express.Router();
import { SUCCESS, FAILED, LOGINFAILED } from "../configs/config";
/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.user){
    res.render('admin', { user:req.session.user});
  }else res.redirect('login');
});
router.get('/logout',async (req,res)=>{
  await req.session.destroy();
  res.json({
    result: SUCCESS,
    data:null,
    message: "Đăng xuất thành công"
  })
})
module.exports = router;
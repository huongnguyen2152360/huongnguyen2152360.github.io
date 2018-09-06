var express = require("express");
var router = express.Router();

import { userLogin } from "../controllers/UserController";
import * as PostController from "../controllers/PostController";
import * as Message from "../configs/config";
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("login", { Error1:"" });
});

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  // Lay list bai viet theo username do trong PostController
  try {
    const loginbody = await userLogin(req.body); // Lay info dang nhap (username,password)
    if (loginbody) { //  Neu da co info dang nhap roi
      req.session.user = loginbody; // thi luu info vao session, session luu vao db - session ghi nho dang nhap
      // console.log(`loginbody: ${JSON.stringify(loginbody)}`);
      req.session.save();
      res.redirect("admin");
    } else {
      res.render("login", { Error1: Message.LOGINFAILED });
    }
  } catch (error) {
    throw error;
  }
});
module.exports = router;

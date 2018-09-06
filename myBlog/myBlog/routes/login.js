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
  const {limit, offset} = req.query;
  // Lay list bai viet theo username do trong PostController
  const allPostsUsername = await PostController.listAllPostsUsername(req.query);
  try {
    const loginbody = await userLogin(req.body);
    if (loginbody) {
      req.session.user = loginbody;
      req.session.post = allPostsUsername;
      console.log('posttttt :', req.session.post);
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

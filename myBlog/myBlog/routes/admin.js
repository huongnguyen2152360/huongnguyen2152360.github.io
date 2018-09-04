var express = require("express");
var router = express.Router();
import * as Message from "../configs/config";
import * as UserController from '../controllers/UserController';
/* GET home page. */
router.get("/", function(req, res, next) {
  if (req.session.user) {
    res.render("admin", { user: req.session.user, Mess1: "" });
  } else res.redirect("login");
});

// LOGOUT
router.get("/logout", async (req, res) => {
  await req.session.destroy();
  res.json({
    result: SUCCESS,
    data: null,
    message: "Logout successfully!"
  });
});
module.exports = router;

// EDIT
router.put("/editprofile", async (req, res) => {
  const { image, password, repassword,username } = req.body;
  try {
    const profilebody = await UserController.userEdit(req.body); // Cho userEdit thuc hien xong // req.body.image
    const updatedProfile = {
      username,
      image
    };

    if (profilebody) {
      if (password === repassword) {
        req.session.user = updatedProfile;
        req.session.save();
        res.json({
          message:Message.UPDATESUCCESS
        })
        // res.render("admin", {user: req.session.user, Mess1: Message.UPDATESUCCESS})
      } else {
        // res.render("admin", {user: req.session.user, Mess1: Message.REGISNOTMATCH})
      }
    }
  } catch (error) {
    throw error;
  }
});

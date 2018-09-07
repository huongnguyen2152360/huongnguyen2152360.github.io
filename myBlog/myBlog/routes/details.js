var express = require('express');
var router = express.Router();

import * as Message from "../configs/config";
import * as UserController from "../controllers/UserController";
import * as PostController from "../controllers/PostController";

/* GET home page. */
router.get("/topic/:id", async function(req, res, next) {
	const { id } = req.params;
	try {
		const findPostById = await PostController.getPostById(req.params); //Lay tat ca post trong db
		// console.log("findPostById :", findPostById);
		if (req.session.user) {
			// console.log(req.session.user);
			res.render("details", { user: req.session.user, postsid: findPostById });
		} else {
			res.render("details", { 
        user: "", 
        postsid: findPostById });
		}
	} catch (error) {
    // console.log(`error: ${error}`);
    throw error
	}
});

module.exports = router;
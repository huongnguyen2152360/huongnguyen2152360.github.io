var express = require('express');
var router = express.Router();

import * as PostController from "../controllers/PostController";
import * as UserController from "../controllers/UserController";

/* GET home page. */
router.get("/", async function(req, res, next) {
	const { offset } = req.query;
	try {
		const allPostsInDb = await PostController.listAllPosts(req.query); //Lay tat ca post trong db
		console.log("allPostsInDb :", allPostsInDb);
		if (req.session.user) {
			// console.log(req.session.user);
			res.render("index", { user: req.session.user, postss: allPostsInDb });
		} else {
			res.render("index", { 
        user: "", 
        postss: allPostsInDb });
		}
	} catch (error) {
    // console.log(`error: ${error}`);
    throw error
	}
});


module.exports = router;

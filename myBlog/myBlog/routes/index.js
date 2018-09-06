var express = require('express');
var router = express.Router();

import * as PostController from "../controllers/PostController";
import * as UserController from "../controllers/UserController";

/* GET home page. */
router.get('/', async function(req, res, next) {
  const { offset } = req.query;
  const allPostsInDb = await PostController.listAllPosts(req.query); //Lay tat ca post trong db
  console.log('ALLPOSTSINDB :', allPostsInDb);
  const {author} = allPostsInDb;

  if(req.session.user) {
    // console.log(req.session.user);
    res.render('index', { user: req.session.user, posts: allPostsInDb});
  } else {
    res.render('index', {posts: allPostsInDb});
  }
});


module.exports = router;

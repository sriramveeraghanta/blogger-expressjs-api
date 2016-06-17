var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Posts = require('../models/posts');
var Post = mongoose.model('Posts', Posts);

/* GET home page. */
router.get('/', function(req, res, next) {
	Posts.find({}, function(err,posts){
		console.log(posts.username);
		var myposts = {
		}
		myposts['posts'] = [];

		for (var i = 0; i< posts.length ; i++) {
			var postsinfo = {
			username : posts[i].username,
			post : posts[i].post,
			datetime: posts[i].datetime,
			}
			myposts.posts.push(postsinfo);
		}

		res.send(myposts);
	});

});

router.post('/', function(req, res, next) {

});

module.exports = router;

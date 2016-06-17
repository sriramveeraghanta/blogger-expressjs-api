var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Posts = require('../models/posts');
var Post = mongoose.model('Posts', Posts);

/* GET home page. */
router.get('/', function(req, res, next) {
	Posts.find({}, function(err,posts){
		console.log(posts);
		res.render('posts', {posts});
	});

});

router.post('/', function(req, res, next) {

});

module.exports = router;

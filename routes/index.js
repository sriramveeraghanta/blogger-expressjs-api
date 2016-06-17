var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Posts = require('../models/posts');
var Post = mongoose.model('Posts', Posts);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

router.post('/', function(req, res, next) {

	console.log(req.body.username)
	var post_data = {
		username : req.body.username,
		post : req.body.post,
		datetime : getDatetime(),
	};

	var post = new Post(post_data);
	post.save(function(error){
		if(error){
			console.log(error);
		}
	});

	res.redirect('/posts');

});

function getDatetime(){
	var date = new Date();

	var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
	
	var year = date.getFullYear();
	
	var month = date.getMonth() + 1;
	month = (month < 10 ? "0" : "") + month;
	
	var day  = date.getDate();
	day = (day < 10 ? "0" : "") + day;

	var current_datetime = day + "-" + month + "-" + year + "  " + hours + ":" + minutes + " " + ampm;

	return current_datetime;
}


module.exports = router;

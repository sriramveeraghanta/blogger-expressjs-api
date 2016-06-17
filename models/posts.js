var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Posts = new Schema({
	username : { type: String, required: true},
	post : { type: String, required: true},
	datetime : {type: String , require: true}
});

module.exports = mongoose.model('Posts', Posts);
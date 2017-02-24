var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new mongoose.Schema({
	name: {type: String, 
		required: [true, 'Name is required!'],
		unique: [true, 'Name already exists!']}
}, {timestamps: true})

var Customer = mongoose.model('Customer', CustomerSchema)

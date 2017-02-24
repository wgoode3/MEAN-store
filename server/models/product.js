var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new mongoose.Schema({
	name: {type: String, 
		required: [true, 'Name is required!'],
		unique: [true, 'Name already exists!']},
	description: {type: String},
	image: {type: String,
		required: [true, 'Image url is required!']},
	quantity: {type: Number,
		required: [true, 'Quantity is required!'],
		min: [0, 'Quantity must be 0 or more!']}
}, {timestamps: true})

var Product = mongoose.model('Product', ProductSchema)

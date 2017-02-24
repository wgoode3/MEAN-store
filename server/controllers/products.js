var mongoose = require('mongoose');
var Product = mongoose.model('Product');

function ProductsController(){
	this.index = function(req, res){
    Product.find({}, function(err, data){
      if(err){
        res.json({message: 'something went wrong getting products'});
      }else{
        res.json(data);
      }
    })
  }
  this.create = function(req, res){
		var product = new Product(req.body);
    product.save(function(err, data){
      if(err){
        res.json(err);
      }else{
        res.json(data);
      }
    })
	}
}
module.exports = new ProductsController();
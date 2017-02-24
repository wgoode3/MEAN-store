console.log('orders controller');
var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

function OrdersController(){
	this.index = function(req, res){
    Order.find({}).populate('_customer _product').exec(function(err, data){
      if(err){
        res.json({message: 'something went wrong getting orders'});
      }else{
        res.json(data);
      }
    })
  }
  this.create = function(req, res){
		var order = new Order(req.body);
    Product.findOne({_id: order._product}, function(err, product){
      // update the quantity
      product.quantity -= order.quantity;
      product.save(function(err, product_data){
        if(err){
          res.json({message: 'something went wrong updating product quantity'});
        }else{
          order.save(function(err, data){
            if(err){
              res.json(err);
            }else{
              res.json(data);
            }
          })
        }
      })
    })
	}
}
module.exports = new OrdersController();
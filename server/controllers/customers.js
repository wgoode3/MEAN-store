console.log('customers controller');
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
var Order = mongoose.model('Order');

function CustomersController(){
	this.index = function(req, res){
    Customer.find({}, function(err, data){
      if(err){
        res.json({message: 'something went wrong getting users'});
      }else{
        res.json(data);
      }
    })
  }
  this.create = function(req, res){
		var customer = new Customer(req.body);
    customer.save(function(err, data){
      if(err){
        res.json(err);
      }else{
        res.json(data);
      }
    })
	}
	this.delete = function(req, res){
    // now I want to get rid of a customer's orders when I delete them
    Order.remove({_customer: req.params.id}, function(err){
      if(err){
        res.json({message: 'something went wrong while deleting orders'});
      }else{
        // then get rid of the customer as well
        Customer.remove({_id: req.params.id}, function(err){
          if(err){
            res.json({message: 'something went wrong while deleting customer'});
          }else{
            res.json({message: `goodbye customer ${req.params.id}`});
          }
        })
      }
    }) 
  }
}
module.exports = new CustomersController();
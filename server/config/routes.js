console.log('my routes');

var customers = require('../controllers/customers.js');
var products = require('../controllers/products.js');
var orders = require('../controllers/orders.js');

module.exports = function(app){
  	
	// handle creating or removing a customer
	app.get('/customers', customers.index);
	app.post('/customers', customers.create);
	app.post('/customers/:id', customers.delete);

	// handle creating and showing products
	app.get('/products', products.index);
	app.post('/products', products.create);

	// // handle creating and displaying orders
	app.get('/orders', orders.index);
	app.post('/orders', orders.create);

}
app.factory('productFactory', ['$http', function($http) {

  var products = [];
  var product = {};

  function ProductFactory(){
  	this.newProduct = function(product, callback){
  	  $http.post('/products', product).then(function(data){
  	  	callback(data);
  	  })
  	}
  	this.getProducts = function(callback){
  	  $http.get('/products').then(function(data){
  	  	callback(data);
  	  })
  	}
  }
  
  return new ProductFactory();
}]);

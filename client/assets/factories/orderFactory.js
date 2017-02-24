console.log('this is the order factory')

app.factory('orderFactory', ['$http', function($http) {

  var orders = [];

  function OrderFactory(){
  	this.order = function(newOrder, callback){
      $http.post('/orders', newOrder).then(function(data){
        callback(data);
      })
    }
    this.getOrders = function(callback){
      $http.get('/orders').then(function(data){
        callback(data);
      })
    }
  }
  
  return new OrderFactory();
}]);

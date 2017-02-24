app.controller('orderController', ['$scope', 'productFactory', 'customerFactory', 'orderFactory', function($scope, productFactory, customerFactory, orderFactory) {
  
  $scope.products = [];
  $scope.customers = [];
  $scope.orders = [];
  $scope.newOrder = {};

  $scope.change = function(){
    for(var i=0; i<$scope.products.length; i++){
      if($scope.products[i]._id == $scope.newOrder._product){
        var quantity = $scope.products[i].quantity;
      }
    }
    var q = [];
    for(var i=1; i<quantity+1; i++){
      q.push(i);
    }
    $scope.quantity = q;
    if(q.length == 0){
      $scope.message = 'Out of stock!';
    }else{
      $scope.message = null;
    }
  }
  
  function getProducts(){
  	productFactory.getProducts(function(data){
  		$scope.products = data.data;
  	})
  }
  getProducts();

  function getCustomers(){
    customerFactory.getCustomers(function(data){
      $scope.customers = data.data;
    })
  }
  getCustomers();

  function getOrders(){
    orderFactory.getOrders(function(data){
      $scope.orders = data.data;
    })
  }
  getOrders();

  $scope.order = function(){
    orderFactory.order($scope.newOrder, function(data){
      $scope.newOrder = {};
      getProducts();
      getOrders();
    })
  }

}]);
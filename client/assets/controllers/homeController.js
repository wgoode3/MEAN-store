console.log('this is the home controller')

app.controller('homeController', ['$scope', 'productFactory', 'customerFactory', 'orderFactory', '$moment', function($scope, productFactory, customerFactory, orderFactory, $moment) {
  
  $scope.products = [];
  $scope.customers = [];
  $scope.orders = [];

  console.log($moment);
  console.log($moment("20111031", "YYYYMMDD").fromNow())

  function getProducts(){
    productFactory.getProducts(function(data){
      $scope.products = data.data;
    })
  }
  getProducts();

  function getCustomers(){
    customerFactory.getCustomers(function(data){
      for(var j=0; j<data.data.length; j++){
        var customer = data.data[j];
        customer.time_relative = $moment(customer.createdAt).fromNow();
        $scope.customers.push(customer);
      }
    })
  }
  getCustomers();

  function getOrders(){
    orderFactory.getOrders(function(data){
      for(var i=0; i<data.data.length; i++){
        var order = data.data[i];
        order.time_relative = $moment(order.createdAt).fromNow();
        $scope.orders.push(order);
      }
    })
  }
  getOrders();

}]);
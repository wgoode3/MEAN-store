app.controller('customerController', ['$scope', 'customerFactory', function($scope, customerFactory) {

  $scope.customers = [];
  $scope.customer = {};

  function getCustomers(){
    customerFactory.getCustomers(function(data){
      $scope.customers = data.data;
    })
  }
  getCustomers();

  $scope.newCustomer = function(){
	customerFactory.newCustomer($scope.customer, function(data){
	  $scope.customers.push(data.data)
	  $scope.customer = {};
    })
  }

  $scope.deleteCustomer = function(customer){
    customerFactory.deleteCustomer(customer._id, function(data){
      for(var i=0; i<$scope.customers.length; i++){
        if($scope.customers[i] == customer){
          $scope.customers.splice(i, 1);
        }
      }
    })
  }
}]);


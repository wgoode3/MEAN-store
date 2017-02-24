console.log('this is the customer factory')

app.factory('customerFactory', ['$http', function($http) {

  var customers = [];
  var customer = {};
  function CustomerFactory(){
    this.getCustomers = function(callback){
      $http.get('/customers').then(function(data){
      	callback(data);
      })
    }
    this.newCustomer = function(customer, callback){
      $http.post('/customers', customer).then(function(data){
    	callback(data);
   	  })
    }
    this.deleteCustomer = function(id, callback){
      $http.post(`/customers/${id}`).then(function(data){
      	callback(data);
      })
    }
  }
  return new CustomerFactory();
}]);

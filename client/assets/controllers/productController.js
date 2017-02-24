console.log('this is the product controller')

app.controller('productController', ['$scope', 'productFactory', '$routeParams', function($scope, productFactory, $rParams) {
  
  $scope.products = [];
  $scope.product = {};

  $scope.newProduct = function(){
  	productFactory.newProduct($scope.product, function(data){
  		$scope.product = {};
  		if(data.data.errors){
  			$scope.errors = data.data.errors;
  		}else{
  			$scope.products.push(data.data);
  		}
  	})
  }

  function getProducts(){
  	productFactory.getProducts(function(data){
  		$scope.products = data.data;
      if($rParams){
        console.log('the route parameter is', $rParams.id);
        for(var i=0; i<$scope.products.length; i++){
          if($scope.products[i]._id == $rParams.id){
            $scope.product = $scope.products[i];
          }
        }
      }
  	})
  }
  getProducts();

}]);
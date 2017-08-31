app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Top Some Books!'; 
  $scope.promo = 'Just!';
  $scope.product = {
    name: 'The First some Book.', 
    price: 19,
    pubdate: new Date('2017','01','24')
  }
}]);

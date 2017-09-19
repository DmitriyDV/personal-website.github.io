app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Top Some Books!'; 
  $scope.promo = 'Just!';
  $scope.products = [ 
  { 
    name: 'The Book of Trees', 
    price: 19, 
    pubdate: new Date('2014', '03', '08'), 
    cover: 'img/planet.png',
    likes : 0
  }, 
  { 
    name: 'Program or be Programmed', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/space.png',
    likes : 0
  } 
];
  $scope.plusOne = function(index) {
    $scope.products[index].likes+=1;
  }
}]);

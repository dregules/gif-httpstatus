'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])



.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
  $scope.findError = function(){
    $http.get('/app/data/errors.json')
      .success(function(response) {
        $scope.errors = response;
        $scope.getRandomGif();
      });
  };
  $scope.getRandomGif = function(){
    $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho')
      .success(function(response) {
        console.log(response);
        $scope.randomGiphy = response.data.image_original_url;
        console.log($scope.randomGiphy);
      });
  };

}]);

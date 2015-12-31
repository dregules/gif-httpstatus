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
  var statusMap = {
    '1xx': {
      gifTag: "american+psycho",
      category: "Informational Response"
    },
    '2xx': {
      gifTag: "success",
      category: "Successful Response"
    },
    '3xx': {
      gifTag: "funny+cat",
      category: "Redirection Message"
    },
    '4xx': {
      gifTag: "shit",
      category: "Client Error Response"
    },
    '5xx': {
      gifTag: "error",
      category: "Server Error Response"
    }
  };
  $scope.getRandomGif = function(){
    $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=shit')
      .success(function(response) {
        console.log(response.data);
        $scope.randomGiphy = response.data.image_original_url;
      });
  };

}]);

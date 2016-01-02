'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    })
    .when('/view1/:status', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
}])



.controller('View1Ctrl', ['$scope', '$http', function($scope, $http){
  $scope.statusSearch = {};
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
  $scope.findStatus = function(){
    $http.get('/app/data/statusHttp.json')
      .success(function(response) {
        $scope.errors = response;
        // console.log("Heres the 'params': " , $scope.statusSearch.code[0], 'xx');
        $scope.getRandomGif();
      });
  };
  $scope.getRandomGif = function(){
    $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + statusMap[$scope.statusSearch.code[0] + 'xx'].gifTag)
      .success(function(response) {
        $scope.randomGiphy = response.data.image_original_url;
      });
  };

}]);

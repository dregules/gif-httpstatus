'use strict';

angular.module('myApp.httpstatus', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/httpstatus', {
      templateUrl: 'js/httpstatus/main.html',
      controller: 'httpCtrl'
    });
    // .when('/httpstatus/:status', {
    //   templateUrl: 'httpstatus/statusCode.html',
    //   controller: 'httpCtrl'
    // });
}])

.controller('httpCtrl', ['$scope', '$http', function($scope, $http){
  $scope.statusSearch = {};
  $scope.footer = false;
  var statusMap = {
    '1': {
      gifTag: "american+psycho",
      category: "1xx Informational"
    },
    '2': {
      gifTag: "success",
      category: "2xx Successful"
    },
    '3': {
      gifTag: "funny+cat",
      category: "3xx Redirection"
    },
    '4': {
      gifTag: "shit",
      category: "4xx Client Error"
    },
    '5': {
      gifTag: "error",
      category: "5xx Server Error"
    }
  };

  $scope.findStatus = function(){
    $http.get('/js/data/statusHttp.json')
      .success(function(response) {
        $scope.statuses = response;
        $scope.statusCategory = statusMap[$scope.statusSearch.code[0]].category;
        $scope.getRandomGif();
      });
  };
  $scope.getRandomGif = function(){
    $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + statusMap[$scope.statusSearch.code[0]].gifTag)
      .success(function(response) {
        $scope.randomGiphy = response.data.image_original_url;
      });
  };

}]);

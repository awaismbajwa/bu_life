var buLifeApp = angular.module('buLifeApp',['ngRoute']);

buLifeApp.controller('MainController',['$scope',function($scope){

  $scope.appName = "BU LIFE"
  $scope.secondTitle = "Frontend Test Task"
  $scope.loggedIn = false;
  $scope.selectedPhoto = {};

  $scope.users = [
    {
      firstName:"Awais",
      familyName:"Bajwa",
      dateOfBirth:new Date(28,02,1990),
      password:"asd",
      email:"asd@."
    }
  ];

}]);



buLifeApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/landing.html"
    })
    .when("/login", {
        templateUrl : "views/login.html",
        controller  : 'loginCtrl'
    })
    .when("/registration", {
        templateUrl : "views/registration.html",
        controller  : 'registrationCtrl'
    })
    .when("/list", {
        templateUrl : "views/list.html",
        controller  : 'listCtrl'
    })
    .when("/details", {
        templateUrl : "views/details.html",
        controller  : 'detailsCtrl'
    });
});

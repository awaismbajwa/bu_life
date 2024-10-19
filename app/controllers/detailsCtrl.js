
buLifeApp.controller('detailsCtrl',['$scope','$http',function($scope,$http){

    $scope.$parent.secondTitle = "Details";
    $scope.loggedIn = true;
    if(!$scope.$parent.loggedIn){
      console.log('not logged in');
      $scope.loggedIn = false;
      return;
    }
    else {
      console.log("logged in");
      $scope.loggedIn = true;
    }

    $scope.photo = $scope.$parent.selectedPhoto;
    if ($scope.photo==undefined) {
      $scope.loggedIn=false;
    }

    console.log('details');

}]);


buLifeApp.controller('listCtrl',['$scope','$http',function($scope,$http){

    $scope.$parent.secondTitle = "List";
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

    $scope.photos = []

    $http({method: 'GET', url: 'https://jsonplaceholder.typicode.com/photos'}).success(function(data) {
      console.log(data);
      if(!$scope.$parent.loggedIn){
        console.log('not logged in');
        $scope.loggedIn = false;
        return;
      }
      else {
        console.log("logged in");
        $scope.loggedIn = true;
      }
      $scope.loggedIn = true;
      for (var i = 0; i < 20; i++) {
        $scope.photos.push(data[i])
      }
    });


    $scope.listItemClicked = function(item){
      $scope.$parent.selectedPhoto = item.photo;
      window.location.href = '/#/details'; //relative to domain

    }

}]);

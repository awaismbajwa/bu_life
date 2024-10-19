
buLifeApp.controller('loginCtrl',['$scope',function($scope){

    $scope.$parent.secondTitle = "Login";
    $scope.email="";
    $scope.password = "";

    $scope.login = function(user){
      var userFound = false;
      for(var i = 0 ; i<$scope.$parent.users.length; i++){
        var registeredUser = $scope.$parent.users[i];
        if(user.password==registeredUser.password && user.email==registeredUser.email){
          userFound = true;
          break;
        }
      }

      if (userFound) {
        $scope.$parent.loggedIn = true;
        alert("Login successfull!!");
        window.location.href = '/#/list'; //relative to domain
        
      }
      else {
        alert("Invalid credentials!!")
        $scope.$parent.loggedIn = false;
      }
    }
}]);


buLifeApp.controller('registrationCtrl',['$scope',function($scope){

  $scope.$parent.secondTitle = "Registration";

  $scope.getEmptyUser = function(){
    return {
      firstName:"",
      familyName:"",
      dateOfBirth:new Date(),
      password:"",
      email:""
    }
  }

  $scope.user = $scope.getEmptyUser()

  console.log($scope);
  $scope.register = function(user){
    console.log(user);

    if (user==undefined) {
      return;
    }

    if ($scope.validateUser(user)) {

      console.log('new user validated');
      var found = $scope.$parent.users.find(function(element){
        return element.email==user.email;
      });
      if(found!=undefined){
        alert("User already exists!!!\nTry with another email.");
        return;
      }
      $scope.$parent.users.push(user);
      $scope.user=$scope.getEmptyUser();
      alert("Registration was successfull!!!");
      window.location.href = '/#/login'; //relative to domain
    }
    else {
      alert("Invalid input!")
    }



  }

  $scope.validateUser = function(user){
    if (user.firstName) {
      if (user.familyName) {
        if (user.password) {
          if (user.email) {
            if(user.email.indexOf('@')>-1){
              if(user.email.indexOf('.')>-1){
                var currentDate = new Date();
                var difference = currentDate.getFullYear()-user.dateOfBirth.getFullYear();
                if (difference<0) {
                  return false;
                }
                else {
                  return true;
                }
              }
              else {
                return false;
              }
            }
            else {
              return false;
            }
          }
          else {
            return false;
          }
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }


}]);

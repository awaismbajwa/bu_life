buLifeApp.directive('dateRegistration', function($q,$timeout) {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, mCtrl) {

      mCtrl.$asyncValidators.younger = function(modelValue, viewValue) {

        var def = $q.defer();

        if(modelValue){
          var currentDate = new Date();
          var value = new Date(modelValue)
          var difference = currentDate.getFullYear()-value.getFullYear();

          if (difference<18) {
            // scope.registrationForm.dateOfbirth.$setValidity("younger", false);
            // mCtrl.$setValidity('younger',false)
            def.reject();
          }
          else {
            def.resolve();
          }
        }
        else {
          def.resolve()
        }

        return def.promise;
      };

      mCtrl.$asyncValidators.future = function(modelValue, viewValue) {

        var def = $q.defer();

        if(modelValue){
          var currentDate = new Date();
          var value = new Date(modelValue)
          var difference = currentDate.getFullYear()-value.getFullYear();

          if (difference<0) {
            //mCtrl.$setValidity('future',false)
            def.reject();
          }
          else {
            def.resolve();
          }
        }
        else {
          def.resolve();
        }

        return def.promise;
      };


    }
  }
});

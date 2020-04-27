(function () {
    'use strict';
    
    angular.module('MsgApp', [])
    .controller('MsgController', MsgController);
    
    MsgController.$inject = ['$scope'];
    function MsgController($scope) {
      $scope.name = "";
      $scope.message = "";
      $scope.displayName = function(){  
        var x = $scope.name;
        var y = x.split(',');
        console.log(y.length);
        $scope.count = y.length ;
        if ($scope.name === "")
            alert("No Items !");
        else if ($scope.count < 4){
            $scope.message="Enjoy !";
        }    
        else{
            $scope.message="Too Much !";
        }
      };

    }
    
    })();
var app =angular.module('aynic',[])
app.controller('aynicLoginController',['$scope','service',function($scope,service){
    console.log('ayniclogin page ');
    $scope.aynicLogin = function($event){
        $event.preventDefault();
        console.log($scope.student);
      }
    }]
  );

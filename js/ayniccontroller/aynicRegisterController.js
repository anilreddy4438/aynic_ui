var app =angular.module('aynic',[])
app.controller('aynicRegisterController',['$scope',function($scope){
    console.log('aynicregister page ');
    $scope.aynicsignup = function($event){
        $event.preventDefault();
        console.log($scope.student);
      }
    }]
  );

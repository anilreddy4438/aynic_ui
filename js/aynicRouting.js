var app = angular.module('aynic',[]);
console.log("working");
console.log(app);
app.controller("mainController",['$scope',function($scope){
  console.log("controller");
}]);
// app.config(['$routeProvider', function ($routeProvider) {
//   console.log("config");
//     $routeProvider.when('/register', {
//             templateUrl: 'aynicregister.html',
//             controller: 'aynicRegisterController'
//         })
//         .when('/login', {
//             templateUrl: 'ayniclogin.html',
//             controller: 'aynicLoginController'
//         })
//         .when('/', {
//             templateUrl: 'ayniclogin.html',
//             controller: 'aynicLoginController'
//         })
//         .otherwise({
//             redirectTo:'/'
//         })
//
// }])
// app.service('service',function(){
//   console.log("service initialised");
//   this.name = "angular";
// });

//ng-app
var myApp = angular.module('Quora' , ['ngRoute' ] , function config($httpProvider){
	$httpProvider.interceptors.push('authInterceptor');
});

 var app = angular.module('business');
 app.factory('handSer', function($http){
 return {
 navPermission : navPermission,
 setPermission : setPermission
 };
 function navPermission(){   //模块设置导航权限
 return $http.get('/workjoin/setButtonPermission');
 }
 function setPermission(){  //下拉导航权限
 return $http.get('/workjoin/sonPermission');
 }
 });

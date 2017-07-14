 var app = angular.module('statement');
 app.factory('statementSer', function($http){
 return {
 navPermission : navPermission,
 setPermission : setPermission
 };
 function navPermission(){   //模块设置导航权限
 return $http.get('/bankaccountinfo/setButtonPermission');
 }
 function setPermission(){   //下拉导航权限
 return $http.get('/bankaccountinfo/sonPermission');
 }
 });

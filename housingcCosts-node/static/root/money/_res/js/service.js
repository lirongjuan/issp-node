var app = angular.module('money');
app.factory('monSer', function($http){
    return {
    	setPermission : setPermission,
        navPermission : navPermission
    };
    function setPermission(){
        return $http.get('/siginmanage/setButtonPermission');
    }
    function navPermission(){
        return $http.get('/siginmanage/sonPermission');
    }
});
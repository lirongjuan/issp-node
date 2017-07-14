var app = angular.module('course');
app.factory('subjectSer', function($http){
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
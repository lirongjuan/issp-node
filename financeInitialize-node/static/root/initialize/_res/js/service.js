var app = angular.module('initialize');
app.factory('initializeSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/initialize/sonPermission');
    }
    function setPermission(){
        return $http.get('/initialize/setButtonPermission');
    }
});
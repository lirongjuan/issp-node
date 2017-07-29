var app = angular.module('contractModule');
app.factory('contractsSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/costDetail/sonPermission');
    }
    function setPermission(){
        return $http.get('/costDetail/setButtonPermission');
    }
});
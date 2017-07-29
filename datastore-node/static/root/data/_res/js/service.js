var app = angular.module('data');
app.factory('basicSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/data/sonPermission');
    }
    function setPermission(){
        return $http.get('/data/setButtonPermission');
    }
});
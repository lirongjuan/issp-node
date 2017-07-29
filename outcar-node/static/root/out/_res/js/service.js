var app = angular.module('out');
app.factory('basicSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/out/sonPermission');
    }
    function setPermission(){
        return $http.get('/out/setButtonPermission');
    }
});
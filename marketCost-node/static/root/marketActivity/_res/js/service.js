var app = angular.module('marketActivity');
app.factory('marketActivitySer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/marketActivity/sonPermission');
    }
    function setPermission(){
        return $http.get('/marketActivity/setButtonPermission');
    }
});
var app = angular.module('card');
app.factory('basicSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/card/sonPermission');
    }
    function setPermission(){
        return $http.get('/card/setButtonPermission');
    }
});
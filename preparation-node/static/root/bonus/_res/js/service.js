var app = angular.module('bonus');
app.factory('basicSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/bonus/sonPermission');
    }
    function setPermission(){
        return $http.get('/bonus/setButtonPermission');
    }
});
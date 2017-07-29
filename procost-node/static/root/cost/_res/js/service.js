var app = angular.module('cost');
app.factory('basicSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/cost/sonPermission');
    }
    function setPermission(){
        return $http.get('/cost/setButtonPermission');
    }
});
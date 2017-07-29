var app = angular.module('business');
app.factory('businessSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/budget/sonPermission');
    }
    function setPermission(){
        return $http.get('/budget/setButtonPermission');
    }
});
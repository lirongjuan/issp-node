var app = angular.module('compete');
app.factory('competeSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/compete/sonPermission');
    }
    function setPermission(){
        return $http.get('/compete/setButtonPermission');
    }
});
var app = angular.module('taxes1');
app.factory('taxesSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/taxes/sonPermission');
    }
    function setPermission(){
        return $http.get('/taxes/setButtonPermission');
    }
});
var app = angular.module('otherexpenses');
app.factory('otherexpensesSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/otherexpenses/sonPermission');
    }
    function setPermission(){
        return $http.get('/otherexpenses/setButtonPermission');
    }
});
var app = angular.module('incomeAccount1');
app.factory('incomeAcSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/incomeAccount/sonPermission');
    }
    function setPermission(){
        return $http.get('/incomeAccount/setButtonPermission');
    }
});
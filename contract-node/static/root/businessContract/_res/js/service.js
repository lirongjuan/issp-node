var app = angular.module('contractServer',[]);
app.factory('contractsSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/siginmanage/sonPermission');
    }
    function setPermission(){
        return $http.get('/siginmanage/setButtonPermission');
    }
});
var app = angular.module('equipmentServer',[]);
app.factory('equipSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/inventory/sonPermission');
    }
    function setPermission(){
        return $http.get('/inventory/setButtonPermission');
    }
});
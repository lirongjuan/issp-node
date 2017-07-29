var app = angular.module('ability');
app.factory('basicSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/abilityManage/sonPermission');
    }
    function setPermission(){
        return $http.get('/abilityManage/setButtonPermission');
    }
});
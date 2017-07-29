var app = angular.module('materialServer',[]);
app.factory('materialSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/materialbuy/sonPermission');
    }
    function setPermission(){
        return $http.get('/materialbuy/setButtonPermission');
    }
});
var app = angular.module('feeServer',[]);
app.factory('feeSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/outfee/sonPermission');
    }
    function setPermission(){
        return $http.get('/outfee/setButtonPermission');
    }
});
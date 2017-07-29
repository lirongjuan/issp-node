var app = angular.module('recordServer',[]);
app.factory('recordSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/vouchergenerate/sonPermission');
    }
    function setPermission(){
        return $http.get('/vouchergenerate/setButtonPermission');
    }
});
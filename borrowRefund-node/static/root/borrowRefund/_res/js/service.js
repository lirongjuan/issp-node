var app = angular.module('borrowRefund');
app.factory('borrowRefundSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/borrowRefund/sonPermission');
    }
    function setPermission(){
        return $http.get('/borrowRefund/setButtonPermission');
    }
});
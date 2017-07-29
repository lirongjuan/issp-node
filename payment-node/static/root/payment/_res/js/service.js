var app = angular.module('payment');
app.factory('paymentSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/payment/sonPermission');
    }
    function setPermission(){
        return $http.get('/payment/setButtonPermission');
    }
});
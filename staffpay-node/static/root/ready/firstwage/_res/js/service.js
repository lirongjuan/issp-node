var app = angular.module('firstwageServer',[]);
app.factory('firstwageSer',function ($http) {
    return {
        listfistwage : listfistwage,
        countfirst:countfirst,
        deletefirst:deletefirst,
        menuPermission:menuPermission,
        paymentfirst:paymentfirst,

    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/firstpayrecord/guidePermission/'+data);
    }
    function listfistwage(data) {
        return $http.get('/firstpayrecord/list',{params:data})
    }
    function countfirst() {
        return $http.get('/firstpayrecord/count')
    }
    function deletefirst(data) {
        return $http.get('/firstpayrecord/delete',{params:data})
    }
    //已付款
    function paymentfirst(data){
        return $http.post('/waitpay/secondPay',data)
    }

});

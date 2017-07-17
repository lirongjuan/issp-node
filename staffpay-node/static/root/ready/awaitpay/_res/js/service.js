var app = angular.module('awaitpayServer',[]);
app.factory('awaitpaySer',function ($http) {
    return {
        listAwaitpay : listAwaitpay,
        countAwaitpay:countAwaitpay,
        addAwaitpay:addAwaitpay,
        getAwaitpay:getAwaitpay,
        editAwaitpay:editAwaitpay,
        deleteAwaitpay:deleteAwaitpay,
        menuPermission:menuPermission,
        paymentWait:paymentWait,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/waitpay/guidePermission/'+data);
    }
    function listAwaitpay(data) {
        return $http.get('/waitpay/list',{params:data})
    }
    function countAwaitpay() {
        return $http.get('/waitpay/count')
    }
    function addAwaitpay(data) {
        return $http.post('/waitpay/add',data)
    }
    function getAwaitpay(data) {
        return $http.get('/waitpay/wait',{params:data})
    }
    function editAwaitpay(data) {
        return $http.post('/waitpay/edit',data)
    }
    function deleteAwaitpay(data) {
        return $http.get('/waitpay/delete',{params:data})
    }
    //第一次付款
    function paymentWait(data){
        return $http.post('/waitpay/firstPay',data)
    }

});

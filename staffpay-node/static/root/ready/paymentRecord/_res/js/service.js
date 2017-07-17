var app = angular.module('paymentRecordServer',[]);
app.factory('paymentRecordSer',function ($http) {
    return {
        listpayment : listpayment,
        countpayment:countpayment,
        deletepayment:deletepayment,
        menuPermission:menuPermission,
        paymentfirst:paymentfirst,
        collectOnly:collectOnly,
        collectArea:collectArea,
        collectDepart:collectDepart,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/payrecord/guidePermission/'+data);
    }
    function listpayment(data) {
        return $http.get('/payrecord/list',{params:data})
    }
    function countpayment() {
        return $http.get('/payrecord/count')
    }
    function deletepayment(data) {
        return $http.get('/payrecord/delete',{params:data})
    }
    //已付款
    function paymentfirst(data){
        return $http.post('/waitpay/secondPay',data)
    }
    //个人汇总
    function collectOnly(data){
        return $http.get('/payrecord/collectName',{params:data})
    }
    //地区汇总
    function collectArea(data){
        return $http.get('/payrecord/collectArea',{params:data})
    }
    //部门汇总
    function collectDepart(data){
        return $http.get('/payrecord/collectDepartment',{params:data})
    }
});

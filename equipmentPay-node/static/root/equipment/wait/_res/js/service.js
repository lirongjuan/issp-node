var app = angular.module('waitServer',[]);
app.factory('waitSer',function ($http) {
    return {
        listWait : listWait,
        findWaitId:findWaitId,
        countWait:countWait,
        waitPermission:waitPermission,
        paymentWait:paymentWait,
        exportWait:exportWait
    };
    //菜单权限
    function waitPermission(data) {
        return $http.get('/waitPermission/waitPermission/'+data);
    }
    function listWait(data) {
        return $http.get('/listWait/list',{
            params: data
        })
    }
    //id查询
    function findWaitId(data){
        return $http.get('/findWaitId/info',{
            params:data
        })
    }
    //分页总条数
    function countWait(data){
        return $http.get('/countWait/count',{params:data})
    }
    //付款
    function paymentWait(data){
        return $http.post('/paymentWait/payment',data)
    }
    //导出
    function exportWait(data){
        return $http.get('/exportWait/export',{params:data})
    }
});

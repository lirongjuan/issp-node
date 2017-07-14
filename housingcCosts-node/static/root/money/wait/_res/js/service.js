var app = angular.module('waitServer',[]);
app.factory('waitSer',function ($http) {
    return {
        listWait : listWait,
        addWait:addWait,
        editWait:editWait,
        findWaitId:findWaitId,
        countWait:countWait,
        deleteWait:deleteWait,
        waitPermission:waitPermission,
        paymentWait:paymentWait
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
    //添加
    function addWait(data){
        return $http.post('/addWait/add',data)
    }
    //编辑
    function editWait(data){
        return $http.post('/editWait/edit',data)
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
    //删除
    function deleteWait(data){
        return $http.get('/deleteWait/delete',{
            params: data
        })
    }
    //付款
    function paymentWait(data){
        return $http.post('/paymentWait/payment',data)
    }
});

var app = angular.module('finoddInforServe',[]);
app.factory('finoddInforSer',function ($http) {
    return {
        menuPermission:menuPermission,
        allList:allList,
        allCount:allCount,
        addData:addData,
        delData:delData,
        congelByOperate:congelByOperate,
        thaw:thaw
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/borrowRefund/finoddInfor/'+data);
    }
    //列表
    function allList(data) {
        return $http.get('/refundManage/finoddInfor/list',{
            params:data
        })
    }
    //分页
    function allCount(){
        return $http.get('/refundManage/finoddInfor/count')
    }
    //添加
    function addData(data){
        return $http.post('/refundManage/finoddInfor/add',data)
    }
    //冻结 
    function congelByOperate(data) {
        return $http.post('/refundManage/finoddInfor/congel',data)
    }
    //解冻
    function thaw(data) {
        return $http.post('/refundManage/finoddInfor/cancelCongel',data)
    }
    //删除
    function delData(data) {
        return $http.post('/refundManage/finoddInfor/delete',data)
    }
});

var app = angular.module('rbusinessCheckServe',[]);
app.factory('rbusinessCheckSer',function ($http) {
    return {
        menuPermission:menuPermission,
        allList:allList,
        allCount:allCount,
        getOneById:getOneById,
        editData:editData
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/borrowRefund/refundManage/'+data);
    }
    //列表
    function allList(data) {
        return $http.get('/refundManage/rbusinessCheck/list',{
            params:data
        })
    }
    //分页
    function allCount(data){
        return $http.get('/refundManage/rbusinessCheck/count',{
            params:data
        })
    }
    //id编辑
    function getOneById(data) {
        return $http.get('/refundManage/applyRecord/getOneById',{
            params:data
        })
    }
    //编辑
    function editData(data){
        return $http.post('/refundManage/rbusinessCheck/editData',data)
    }
});

var app = angular.module('hasAuditServe',[]);
app.factory('hasAuditSer',function ($http) {
    return {
        menuPermission:menuPermission,
        allList:allList,
        allCount:allCount
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/borrowRefund/borrowManage/'+data);
    }
    //列表
    function allList(data) {
        return $http.get('/borrowManage/hasAudit/list',{
            params:data
        })
    }
    //分页
    function allCount(){
        return $http.get('/borrowManage/hasAudit/count')
    }
});

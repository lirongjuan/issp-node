var app = angular.module('rhasAnalyzeServe',[]);
app.factory('rhasAnalyzeSer',function ($http) {
    return {
        menuPermission:menuPermission,
        allList:allList,
        allCount:allCount
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/borrowRefund/refundManage/'+data);
    }
    //列表
    function allList(data) {
        return $http.get('/refundManage/rhasAnalyze/list',{
            params:data
        })
    }
    //分页
    function allCount(){
        return $http.get('/refundManage/rhasAnalyze/count')
    }
});

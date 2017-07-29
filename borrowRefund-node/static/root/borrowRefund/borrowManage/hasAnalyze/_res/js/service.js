var app = angular.module('hasAnalyzeServe',[]);
app.factory('hasAnalyzeSer',function ($http) {
    return {
        menuPermission:menuPermission,
        allList:allList,
        allCount:allCount,
        collectLender:collectLender,
        collectProjectGroup:collectProjectGroup,
        collectArea:collectArea,
        collectProjectName:collectProjectName,
        allgetLender:allgetLender,
        allgetPGroup:allgetPGroup,
        allgetArea:allgetArea,
        allgetPName:allgetPName
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/borrowRefund/borrowManage/'+data);
    }
    //列表
    function allList(data) {
        return $http.get('/borrowManage/hasAnalyze/list',{
            params:data
        })
    }
    //分页
    function allCount(){
        return $http.get('/borrowManage/hasAnalyze/count')
    }
    //汇总
    function collectLender(data) {
        return $http.get('/borrowManage/hasAnalyze/collectLender',{
            params:data
        })
    }
    //借款人 
    function allgetLender(){
        return $http.get('/borrowManage/hasAnalyze/allgetLenderList')
    }
    //汇总 项目组
    function collectProjectGroup(data) {
        return $http.get('/borrowManage/hasAnalyze/collectProjectGroup',{
            params:data
        })
    }
    //项目组 
    function allgetPGroup(){
        return $http.get('/borrowManage/hasAnalyze/allgetPGroupListget')
    }
    //汇总 地区
    function collectArea(data) {
        return $http.get('/borrowManage/hasAnalyze/collectArea',{
            params:data
        })
    }
    //地区 
    function allgetArea(){
        return $http.get('/borrowManage/hasAnalyze/allgetArea')
    }
    //汇总 项目名称
    function collectProjectName(data) {
        return $http.get('/borrowManage/hasAnalyze/collectProjectName',{
            params:data
        })
    }
    //项目名称
    function allgetPName(){
        return $http.get('/borrowManage/hasAnalyze/allgetPNameList')
    }
});

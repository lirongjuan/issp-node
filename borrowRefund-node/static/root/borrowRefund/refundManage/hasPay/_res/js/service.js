var app = angular.module('hasPayServe',[]);
app.factory('hasPaySer',function ($http) {
    return {
        menuPermission:menuPermission,
        allList:allList,
        allCount:allCount,
        bVoucher:bVoucher,
        allgetLender:allgetLender,
        collectLender:collectLender,
        listFirstSubject:listFirstSubject,
        collectFirstSubject:collectFirstSubject,
        listArea:listArea,
        collectArea:collectArea,
        listProject:listProject,
        collectProjectName:collectProjectName
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/borrowRefund/borrowManage/'+data);
    }
    //列表
    function allList(data) {
        return $http.get('/refundManage/hasPay/list',{
            params:data
        })
    }
    //分页
    function allCount(){
        return $http.get('/refundManage/hasPay/count')
    }
    //报销人 
    function allgetLender(){
        return $http.get('/refundManage/hasPay/listUser')
    }
    //汇总 报销人
    function collectLender(data) {
        return $http.get('/refundManage/hasPay/reimer',{
            params:data
        })
    }
    //一级科目 
    function listFirstSubject(){
        return $http.get('/refundManage/hasPay/listFirstSubject')
    }
    //汇总 一级科目
    function collectFirstSubject(data) {
        return $http.get('/refundManage/hasPay/collectFirstSubject',{
            params:data
        })
    }
    //地区 
    function listArea(){
        return $http.get('/refundManage/hasPay/listArea')
    }
    //汇总 地区
    function collectArea(data) {
        return $http.get('/refundManage/hasPay/collectArea',{
            params:data
        })
    }
    //项目名称
    function listProject(){
        return $http.get('/refundManage/hasPay/listProject')
    }
    //汇总 项目名称
    function collectProjectName(data) {
        return $http.get('/refundManage/hasPay/collectProjectName',{
            params:data
        })
    }
    //生成记账凭证
    function bVoucher(data) {
        return $http.get('/refundManage/hasPay/bVoucher',{
            params:data
        })
    }
});

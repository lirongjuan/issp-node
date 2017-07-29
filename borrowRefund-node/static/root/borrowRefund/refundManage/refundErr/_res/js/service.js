var app = angular.module('refundErrServe',[]);
app.factory('refundErrSer',function ($http) {
    return {
        menuPermission:menuPermission,
        allList:allList,
        allCount:allCount,
        addData:addData,
        getOneById:getOneById,
        editData:editData,
        deleteData:deleteData,
        allThirdSubject:allThirdSubject,
        allPlains:allPlains,
        FirstAndSecond:FirstAndSecond,
        auditDetailList:auditDetailList
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/borrowRefund/refundManage/'+data);
    }
    //列表
    function allList(data) {
        return $http.get('/refundManage/refundErr/list',{
            params:data
        })
    }
    //分页
    function allCount(data){
        return $http.get('/refundManage/refundErr/count',{
            params:data
        })
    }
    //添加
    function addData(data){
        return $http.post('/refundManage/refundErr/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.get('/refundManage/refundErr/getOneById',{
            params:data
        })
    }
    //编辑
    function editData(data){
        return $http.post('/refundManage/refundErr/editData',data)
    }
    //删除
    function deleteData(data){
        return $http.post('/refundManage/refundErr/delete',data)
    }
    //获取所有三级科目
    function allThirdSubject(){
        return $http.get('/refundManage/applyRecord/allSubject');
    }
    //获取说明
    function allPlains(data) {
        return $http.post('/refundManage/applyRecord/allPlains',data)
    }
    //获取一级二级
    function FirstAndSecond(data) {
        return $http.post('/refundManage/applyRecord/FirstAndSecond',data)
    }
    //审核详情
    function auditDetailList(data) {
        return $http.get('/refundManage/refundErr/refundErrDetail',{
            params:data
        })
    }
});

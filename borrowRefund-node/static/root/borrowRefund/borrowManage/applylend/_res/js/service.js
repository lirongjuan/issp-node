var app = angular.module('applylendServe',[]);
app.factory('applylendSer',function ($http) {
    return {
        menuPermission:menuPermission,
        allList:allList,
        allCount:allCount,
        addData:addData,
        getOneById1:getOneById,
        editData:editData,
        deleteData:deleteData,
        allThirdSubject:allThirdSubject,
        allPlains:allPlains,
        FirstAndSecond:FirstAndSecond,
        auditDetailList:auditDetailList
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/borrowRefund/borrowManage/'+data);
    }
    //列表
    function allList(data) {
        return $http.get('/borrowManage/applylend/list',{
            params:data
        })
    }
    //分页
    function allCount(data){
        return $http.get('/borrowManage/applylend/count',{
            params:data
        })
    }
    //添加
    function addData(data){
        return $http.post('/borrowManage/applylend/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.get('/borrowManage/applylend/getOneById',{
            params:data
        })
    }
    //编辑
    function editData(data){
        return $http.post('/borrowManage/applylend/editData',data)
    }
    //删除
    function deleteData(data){
        return $http.post('/borrowManage/applylend/delete',data)
    }
    //获取所有三级科目
    function allThirdSubject(){
        return $http.get('/borrowManage/applylend/allSubject');
    }
    //获取说明
    function allPlains(data) {
        return $http.post('/borrowManage/applylend/allPlains',data)
    }
    //获取一级二级
    function FirstAndSecond(data) {
        return $http.post('/borrowManage/applylend/FirstAndSecond',data)
    }
    //
    function auditDetailList(data) {
        return $http.post('/borrowManage/applylend/auditDetail',data)
    }
});

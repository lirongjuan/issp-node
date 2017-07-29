var app = angular.module('analyzeServe',[]);
app.factory('analyzeSer',function ($http) {
    return {
        menuPermission:menuPermission,
        allList:allList,
        allCount:allCount,
        addData:addData,
        delData:delData,
        getById:getById,
        editData:editData,
        allLisisor:allLisisor
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/borrowRefund/analyze/'+data);
    }
    //列表
    function allList(data) {
        return $http.get('/refundManage/analyze/list',{
            params:data
        })
    }
    //分页
    function allCount(){
        return $http.get('/refundManage/analyze/count')
    }
    //分页
    function allLisisor(){
        return $http.get('/refundManage/analyze/allLisisor')
    }
    //获取id
    function getById(data) {
        return $http.get('/refundManage/analyze/getOneById',{
            params:data
        })
    }
    //添加
    function addData(data){
        return $http.post('/refundManage/analyze/add',data)
    }
    //编辑
    function editData(data){
        return $http.post('/refundManage/analyze/editData',data)
    }
    //删除
    function delData(data) {
        return $http.post('/refundManage/analyze/delete',data)
    }
});

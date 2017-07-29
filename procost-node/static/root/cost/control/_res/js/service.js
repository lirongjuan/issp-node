var app = angular.module('controlServer',[]);
app.factory('controlSer',function ($http) {
    return {
        listControl : listControl,
        countBaseInfo:countBaseInfo,
        addControl:addControl,
        deleteControl:deleteControl,
        editControl:editControl,
        getOneById:getOneById,
        menuPermission:menuPermission,
        actualControl:actualControl,
        ectSummary:ectSummary,
    };
    //列表
    function listControl(data) {
        return $http.get('/listControl/list',{
            params:data
        })
    }
    //分页
    function countBaseInfo(){
        return $http.get('/control/count')
    }
    //添加
    function addControl(data){
        return $http.post('/addControl/add',data)
    }
    //删除
    function deleteControl(data){
        return $http.get('/deleteControl/delete',{params:data})
    }
    //编辑
    function editControl(data){
        return $http.post('/editControl/edit',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.get('/control/getOneById',{params:data})
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/control/guidePermission/'+data);
    }
    //修改实际
    function actualControl(data){
        return $http.get('/actualControl/control',{params:data})
    }
    //汇总
    function ectSummary(data) {
        return $http.post('/ectSummary/data',data)
    }
});

var app = angular.module('checkindexServe',[]);
app.factory('checkindexSer',function ($http) {
    return {
        menuPermission:menuPermission,
        allList:allList,
        allCount:allCount,
        addData:addData,
        getById:getById,
        editData:editData,
        deleteData:deleteData
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/checkindex/guidePermission/'+data);
    }
    //列表
    function allList(data) {
        return $http.get('/check/checkindex/list',{
            params:data
        })
    }
    //分页
    function allCount(){
        return $http.get('/check/checkindex/count')
    }
    //添加
    function addData(data){
        return $http.post('/check/checkindex/add',data)
    }
    //id编辑
    function getById(data) {
        return $http.post('/check/checkindex/getOneById',data)
    }
    //编辑
    function editData(data){
        return $http.post('/check/checkindex/editData',data)
    }
    //删除
    function deleteData(data){
        return $http.post('/check/checkindex/delete',data)
    }
});

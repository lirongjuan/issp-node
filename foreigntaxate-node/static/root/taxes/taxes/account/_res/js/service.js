var app = angular.module('accountServe',[]);
app.factory('accountSer',function ($http) {
    return {
        menuPermission:menuPermission,
        allList:allList,
        allCount:allCount,
        addData:addData,
        getOneById1:getOneById,
        editData:editData,
        deleteData:deleteData,
        viewSigning:viewSigning
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/account/guidePermission/'+data);
    }
    //列表
    function allList(data) {
        return $http.get('/taxes/account/list',{
            params:data
        })
    }
    //分页
    function allCount(){
        return $http.get('/taxes/account/count')
    }
    //添加
    function addData(data){
        return $http.post('/taxes/account/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/taxes/account/getOneById',data)
    }
    //编辑
    function editData(data){
        return $http.post('/taxes/account/edit',data)
    }
    //删除
    function deleteData(data){
        return $http.post('/taxes/account/delete',data)
    }
    //查看附件列表
    function viewSigning(data) {
        return $http.get('/account/viewFile',{
            params:data
        })
    }
});

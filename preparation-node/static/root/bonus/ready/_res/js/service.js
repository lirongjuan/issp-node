var app = angular.module('readyServer',[]);
app.factory('readySer',function ($http) {
    return {
        listReady : listReady,
        countReady:countReady,
        addReady:addReady,
        deleteReady:deleteReady,
        editReady:editReady,
        getOneById:getOneById,
        menuPermission:menuPermission,
        monthReady:monthReady,
        yearReady:yearReady,
        contrastReady:contrastReady,
        getProjectNames:getProjectNames,
        projectReady:projectReady
    };
    //列表
    function listReady(data) {
        return $http.get('/listReady/list',{
            params:data
        })
    }
    //分页
    function countReady(){
        return $http.get('/countReady/count')
    }
    //添加
    function addReady(data){
        return $http.post('/addReady/add',data)
    }
    //删除
    function deleteReady(data){
        return $http.get('/deleteReady/delete',{params:data})
    }
    //编辑
    function editReady(data){
        return $http.post('/editReady/edit',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.get('/ready/getOneById',{params:data})
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/ready/guidePermission/'+data);
    }
    //月汇总
    function monthReady(data){
        return $http.post('/monthReady/summary',data)
    }
    //年汇总
    function yearReady(data){
        return $http.post('/yearReady/summary',data)
    }
    //对比汇总
    function contrastReady(data){
        return $http.post('/contrastReady/summary',data)
    }
    //获取所有项目组名称
    function getProjectNames() {
        return $http.get('/getProjectNames/names')
    }
    //项目组汇总
    function projectReady(data){
        return $http.post('/projectReady/summary',data)
    }
});

var app = angular.module('capitalServer',[]);
app.factory('capitalSer',function ($http) {
    return {
        listCapital : listCapital,
        countCapital:countCapital,
        addCapital:addCapital,
        deleteCapital:deleteCapital,
        editCapital:editCapital,
        getOneById:getOneById,
        menuPermission:menuPermission,
    };
    //列表
    function listCapital(data) {
        return $http.get('/capital/list',{
            params:data
        })
    }
    //分页
    function countCapital(){
        return $http.get('/capital/count')
    }
    //添加
    function addCapital(data){
        return $http.post('/addCapital/add',data)
    }
    //删除
    function deleteCapital(data){
        return $http.get('/deleteCapital/delete',{params:data})
    }
    //编辑
    function editCapital(data){
        return $http.post('/editCapital/edit',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.get('/capital/getOneById',{params:data})
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/capital/guidePermission/'+data);
    }
});

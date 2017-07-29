var app = angular.module('otherServer',[]);
app.factory('otherSer',function ($http) {
    return {
        otherList : otherList,
        menuPermission : menuPermission,
        addother:addother,
        editother:editother,
        findotherId:findotherId,
        countother:countother,
        deleteother:deleteother
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/other/guidePermission/'+data);
    }
    //列表
    function otherList(data) {
        return $http.get('/other/list',{
            params: data
        })
    }

    //添加
    function addother(data){
        return $http.post('/other/add',data)
    }

    //编辑
    function editother(data){
        return $http.post('/other/edit',data)
    }
    //id查询
    function findotherId(data){
        return $http.get('/other/getOneById',{
            params:data
        })
    }
    //分页总条数
    function countother(data){
        return $http.get('/other/count',{params:data})
    }
    //删除
    function deleteother(data){
        return $http.get('/other/delete',{
            params: data

        })
    }
});

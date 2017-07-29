var app = angular.module('outerServer',[]);
app.factory('outerSer',function ($http) {
    return {
        outerList : outerList,
        menuPermission : menuPermission,
        addouter:addouter,
        editouter:editouter,
        findouterId:findouterId,
        countouter:countouter,
        deleteouter:deleteouter
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/outer/guidePermission/'+data);
    }
    //列表
    function outerList(data) {
        return $http.get('/outer/list',{
            params: data
        })
    }

    //添加
    function addouter(data){
        return $http.post('/outer/add',data)
    }

    //编辑
    function editouter(data){
        return $http.post('/outer/edit',data)
    }
    //id查询
    function findouterId(data){
        return $http.get('/outer/getOneById',{
            params:data
        })
    }
    //分页总条数
    function countouter(data){
        return $http.get('/outer/count',{params:data})
    }
    //删除
    function deleteouter(data){
        return $http.get('/outer/delete',{
            params: data

        })
    }
});

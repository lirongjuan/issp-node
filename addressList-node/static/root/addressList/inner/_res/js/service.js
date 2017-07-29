var app = angular.module('basicServer',[]);
app.factory('basicSer',function ($http) {
    return {
        innerList : innerList,
        menuPermission : menuPermission,
        addinner:addinner,
        editinner:editinner,
        findinnerId:findinnerId,
        countinner:countinner,
        deleteinner:deleteinner,
        allName:allName
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/inner/guidePermission/'+data);
    }
    //列表
    function innerList(data) {
        return $http.get('/inner/list',{
            params: data
        })
    }

    //添加
    function addinner(data){
        return $http.post('/inner/add',data)
    }

    //编辑
    function editinner(data){
        return $http.post('/inner/edit',data)
    }
    //id查询
    function findinnerId(data){
        return $http.get('/inner/getOneById',{
            params:data
        })
    }
    //分页总条数
    function countinner(data){
        return $http.get('/inner/count',{params:data})
    }
    //删除
    function deleteinner(data){
        return $http.get('/inner/delete',{
            params: data

        })
    }
    //获取所有姓名
    function allName(){
        return $http.get('/inner/name')
    }
});

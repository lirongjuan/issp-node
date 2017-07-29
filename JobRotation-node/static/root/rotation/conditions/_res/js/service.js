var app = angular.module('conditServer',[]);
app.factory('conditSer',function ($http) {
    return {
        conditEdit:conditEdit,
        conditId:conditId,
        conditList:conditList,
        conditAdd:conditAdd,
        conditCount:conditCount,
        conditDelete:conditDelete,
        conditPermission:conditPermission
    };
    //菜单权限
    function conditPermission(data) {
        return $http.get('/conditPermission/conditPermission/'+data);
    }
    function conditList(data) {
        return $http.get('/conditList/list',{
            params: data
        })
    }

    //添加
    function conditAdd(data){
        return $http.post('/conditAdd/add',data)
    }
    //编辑
    function conditEdit(data){
        return $http.post('/conditEdit/edit',data)
    }
    //id查询
    function conditId(data){
        return $http.get('/conditId/Id',{
            params:data
        })
    }
    //分页总条数
    function conditCount(){
        return $http.get('/conditCount/count')
    }
    //删除
    function conditDelete(data){
        return $http.get('/conditDelete/delete',{
            params: data
        })
    }
});

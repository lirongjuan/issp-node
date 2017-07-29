var app = angular.module('standServer',[]);
app.factory('standSer',function ($http) {
    return {
        standEdit:standEdit,
        standList:standList,
        standAdd:standAdd,
        standId:standId,
        standCount:standCount,
        standDelete:standDelete,
        standThaw:standThaw,//解冻
        standCongeal:standCongeal,//冻结
        standPermission:standPermission
    };
    //菜单权限
    function standPermission(data) {
        return $http.get('/standPermission/standPermission/'+data);
    }
    function standList(data) {
        return $http.get('/standList/list',{
            params: data
        })
    }

    //添加
    function standAdd(data){
        return $http.post('/standAdd/add',data)
    }
    //编辑
    function standEdit(data){
        return $http.post('/standEdit/edit',data)
    }
    //id查询
    function standId(data){
        return $http.get('/standId/Id',{
            params:data
        })
    }
    //分页总条数
    function standCount(){
        return $http.get('/standCount/count')
    }
    //删除
    function standDelete(data){
        return $http.get('/standDelete/delete',{
            params: data
        })
    }
    //解冻
    function standThaw(data){
        return $http.get('/standThaw/thaw',{
            params: data
        })
    }
//冻结
    function standCongeal(data){
        return $http.get('/standCongeal/congeal',{
            params: data
        })
    }   
});

var app = angular.module('sinServer',[]);
app.factory('sinSer',function ($http) {
    return {
        sinList : sinList,
        sinAdd:sinAdd,
        deparEdit:deparEdit,
        deparId:deparId,
        deparCount:deparCount,
        deparDelete:deparDelete,
        sinGuide:sinGuide
        
    };
    function sinList(data) {
        return $http.get('/sinList/list',{
            params: data

        })
    }
    //添加
    function sinAdd(data){
        return $http.post('/sinAdd/add',data)
    }
    //编辑
    function deparEdit(data){
        return $http.post('/deparEdit/edit',data)
    }
    //id查询
    function deparId(data){
        return $http.get('/deparId/Id',{
            params:data
        })
    }
    //分页总条数
    function deparCount(data){
        return $http.get('/deparCount/count',{params:data})
    }
    //删除
    function deparDelete(data){
        return $http.get('/deparDelete/delete',{
            params: data
        })
    }
    //功能导航权限
    function sinGuide(data){
        return $http.get('/sinGuide/guide/'+data)
    }
    //离职人员姓名
    function sinName(data){
        return $http.get('/sinName/name',{
            params: data

        })
    }
});

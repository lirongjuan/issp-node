var app = angular.module('statiServer',[]);
app.factory('statiSer',function ($http) {
    return {
        statEdit:statEdit,
        statId:statId,
        statList:statList,
        statAdd:statAdd,
        statCount:statCount,
        statDelete:statDelete,
        gitName:gitName,
        gitTier:gitTier,
        statPermission:statPermission
    };
    //菜单权限
    function statPermission(data) {
        return $http.get('/statPermission/statPermission/'+data);
    }
    function statList(data) {
        return $http.get('/statList/list',{
            params: data
        })
    }

    //添加
    function statAdd(data){
        return $http.post('/statAdd/add',data)
    }
    //编辑
    function statEdit(data){
        return $http.post('/statEdit/edit',data)
    }
    //id查询
    function statId(data){
        return $http.get('/statId/Id',{
            params:data
        })
    }
    //分页总条数
    function statCount(){
        return $http.get('/statCount/count')
    }
    //删除
    function statDelete(data){
        return $http.get('/statDelete/delete',{
            params: data
        })
    }
    //姓名
    function gitName(){
        return $http.get('/gitName/name')
    }
    //举荐轮换等级
    function gitTier(){
        return $http.get('/gitTier/tier')
    }
});

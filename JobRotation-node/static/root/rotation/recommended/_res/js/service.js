var app = angular.module('recomServer',[]);
app.factory('recomSer',function ($http) {
    return {
        recomIdeaZ:recomIdeaZ,
        recomEdit:recomEdit,
        recomId:recomId,
        recomList:recomList,
        recomAdd:recomAdd,
        recomCount:recomCount,
        recomDelete:recomDelete,
        gitName:gitName,
        gitLevel:gitLevel,
        recomPermission:recomPermission
    };
    //菜单权限
    function recomPermission(data) {
        return $http.get('/recomPermission/recomPermission/'+data);
    }
    function recomList(data) {
        return $http.get('/recomList/list',{
            params: data
        })
    }

    //添加
    function recomAdd(data){
        return $http.post('/recomAdd/add',data)
    }
    //编辑
    function recomEdit(data){
        return $http.post('/recomEdit/edit',data)
    }
    //id查询
    function recomId(data){
        return $http.get('/recomId/Id',{
            params:data
        })
    }
    //分页总条数
    function recomCount(){
        return $http.get('/recomCount/count')
    }
    //删除
    function recomDelete(data){
        return $http.get('/recomDelete/delete',{
            params: data
        })
    }
    //总经办意见
    function recomIdeaZ(data){
        return $http.post('/recomIdeaZ/ideaZ',data)
    }
    //姓名
    function gitName(){
        return $http.get('/gitName/name')
    }
    //举荐轮换等级
    function gitLevel(){
        return $http.get('/gitLevel/level')
    }
});

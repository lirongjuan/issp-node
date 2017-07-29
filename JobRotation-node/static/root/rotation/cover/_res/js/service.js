var app = angular.module('coverServer',[]);
app.factory('coverSer',function ($http) {
    return {
        coverIdeaZ:coverIdeaZ,
        coverEdit:coverEdit,
        coverId:coverId,
        coverList:coverList,
        coverAdd:coverAdd,
        coverDelete:coverDelete,
        coverCount:coverCount,
        coverIdea:coverIdea,
        gitLevel:gitLevel,
        coverPermission:coverPermission
    };
    //菜单权限
    function coverPermission(data) {
        return $http.get('/coverPermission/coverPermission/'+data);
    }
    function coverList(data) {
        return $http.get('/coverList/list',{
            params: data
        })
    }

    //添加
    function coverAdd(data){
        return $http.post('/coverAdd/add',data)
    }
    //编辑
    function coverEdit(data){
        return $http.post('/coverEdit/edit',data)
    }
    //id查询
    function coverId(data){
        return $http.get('/coverId/Id',{
            params:data
        })
    }
    //分页总条数
    function coverCount(){
        return $http.get('/coverCount/count')
    }
    //删除
    function coverDelete(data){
        return $http.get('/coverDelete/delete',{
            params: data
        })
    }
    //总经办意见
    function coverIdeaZ(data){
        return $http.post('/coverIdeaZ/ideaZ',data)
    }
    //意见
    function coverIdea(data){
        return $http.post('/coverIdea/idea',data)
    }
    //举荐轮换等级
    function gitLevel(){
        return $http.get('/gitLevel/level')
    }
});

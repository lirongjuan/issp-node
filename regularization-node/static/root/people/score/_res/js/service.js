var app = angular.module('scoreServer',[]);
app.factory('scoreSer',function ($http) {
    return {
        scoreList : scoreList,
        scoreAdd:scoreAdd,
        scoreDelete:scoreDelete,
        scoreEdit:scoreEdit,
        scoreCount:scoreCount,
        scoreId:scoreId,
        scorePermission:scorePermission
        
    };
    function scoreList(data) {
        return $http.get('/scoreList/list',{
            params: data
        })
    }

    //添加
    function scoreAdd(data){
        return $http.post('/scoreAdd/add',data)
    }
    //编辑
    function scoreEdit(data){
        return $http.post('/scoreEdit/edit',data)
    }
    //id查询
    function scoreId(data){
        return $http.get('/scoreId/Id',{
            params:data
        })
    }
    //分页总条数
    function scoreCount(){
        return $http.get('/scoreCount/count')
    }
    //删除
    function scoreDelete(data){
        return $http.get('/scoreDelete/delete',{
            params: data

        })
    }
    //----------------------------
    //功能导航权限
    function scorePermission(data){
        return $http.get('/scorePermission/permission/'+data);
    }
});

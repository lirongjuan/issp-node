var app = angular.module('peopleServer',[]);
app.factory('peopleSer',function ($http) {
    return {
        popAdd:popAdd,
        popList:popList,
        popEdit:popEdit,
        popAudit:popAudit,
        popCount:popCount,
        popId:popId,
        popDelete:popDelete,
        popPermission:popPermission
    };
    //菜单权限
    function popPermission(data) {
        return $http.get('/popPermission/popPermission/'+data);
    }
    function popList(data) {
        return $http.get('/popList/list',{
            params: data

        })
    }

    //添加
    function popAdd(data){
        return $http.post('/popAdd/add',data)
    }
    //编辑
    function popEdit(data){
        return $http.post('/popEdit/edit',data)
    }
    //审核
    function popAudit(data){
        return $http.post('/popAudit/audit',data)
    }
    //id查询
    function popId(data){
        return $http.get('/popId/answer',{
            params:data
        })
    }
    //分页总条数
    function popCount(){
        return $http.get('/popCount/count')
    }
    //删除
    function popDelete(data){
        return $http.get('/popDelete/delete',{
            params: data

        })
    }
});

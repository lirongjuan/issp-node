var app = angular.module('scoringServer',[]);
app.factory('scoringSer',function ($http) {
    return {
        scoringList : scoringList,
        scoringAdd:scoringAdd,
        scoringEdit:scoringEdit,
        scoringDelete:scoringDelete,
        scoringId:scoringId,
        scoringCount:scoringCount,
        scoringPermission:scoringPermission
        
    };
    function scoringList(data) {
        return $http.get('/scoringList/list',{
            params: data

        })
    }

    //添加
    function scoringAdd(data){
        return $http.post('/scoringAdd/add',data)
    }
    //编辑
    function scoringEdit(data){
        return $http.post('/scoringEdit/edit',data)
    }
    //id查询
    function scoringId(data){
        return $http.get('/scoringId/Id',{
            params:data
        })
    }
    //分页总条数
    function scoringCount(){
        return $http.get('/scoringCount/count')
    }
    //删除
    function scoringDelete(data){
        return $http.get('/scoringDelete/delete',{
            params: data
        })
    }
    //----------------------------
    //功能导航权限
    function scoringPermission(data){

        return $http.get('/scoringPermission/permission/'+data);
    }

});

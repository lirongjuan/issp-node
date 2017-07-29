var app = angular.module('obligationsServer',[]);
app.factory('obligationsSer',function ($http) {
    return {
        obligationsList : obligationsList,
        obligationsId:obligationsId,
        obligationsEdit:obligationsEdit,
        obligationsCount:obligationsCount,
        obligationsDelete:obligationsDelete,
        obligationsAdd:obligationsAdd
    };
//列表
    function  obligationsList(data) {
        return $http.get('/obligationsList/list',{
            params:data
        })
    }    
//根据id获取
    function  obligationsId(data) {
        return $http.get('/obligationsId/id',{
            params:data
        })
    }
//编辑
    function obligationsEdit(data){
        return $http.post('/obligationsEdit/edit',data)
    }
//总条数
    function  obligationsCount(data) {
        return $http.get('/obligationsCount/count',{
            params:data
        })
    }
//删除
    function obligationsDelete(data){
        return $http.get('/obligationsDelete/delete',{
            params:data
        })
    }
//添加
    function obligationsAdd(data){
        return $http.post('/obligationsAdd/add',data)
    }
});

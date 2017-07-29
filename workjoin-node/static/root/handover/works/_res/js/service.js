var app = angular.module('worksServer',[]);
app.factory('worksSer',function ($http) {
    return {
        worksList : worksList,
        worksEdit:worksEdit,
        worksDelete:worksDelete, 
        worksCount:worksCount,
        worksId:worksId,
        worksAdd:worksAdd    
    };
//列表
    function  worksList(data) {
        return $http.get('/worksList/list',{
            params:data
        })
    }
//编辑
    function worksEdit(data){
        return $http.post('/worksEdit/edit',data)
    }
 //删除
    function worksDelete(data){
        return $http.get('/worksDelete/delete',{
            params:data
        })
    }
//总条数
    function  worksCount(data) {
        return $http.get('/worksCount/count',{
            params:data
        })
    }
//根据id获取绩效指标数据
    function  worksId(data) {
        return $http.get('/worksId/id',{
            params:data
        })
    }
//添加
    function worksAdd(data){
        return $http.post('/worksAdd/add',data)
    }
});

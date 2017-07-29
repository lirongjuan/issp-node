var app = angular.module('timesServer',[]);
app.factory('timesSer',function ($http) {
    return {
        timesList : timesList,
        timesCount:timesCount,
        timesAdd:timesAdd,
        timesId:timesId,
        timesEdit:timesEdit,
        timesDelete:timesDelete

    };
//列表
    function  timesList(data) {
        return $http.get('/timesList/list',{
            params:data
        })
    }    
//总条数
    function  timesCount(data) {
        return $http.get('/timesCount/count',{
            params:data
        })
    }
//添加
    function timesAdd(data){
        return $http.post('/timesAdd/add',data)
    }
//根据id获取绩效指标数据
    function  timesId(data) {
        return $http.get('/timesId/id',{
            params:data
        })
    }
//编辑
    function timesEdit(data){
        return $http.post('/timesEdit/edit',data)
    }
//删除
    function timesDelete(data){
        return $http.get('/timesDelete/delete',{
            params:data
        })
    }
});

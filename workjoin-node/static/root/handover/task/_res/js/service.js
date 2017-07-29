var app = angular.module('taskServer',[]);
app.factory('taskSer',function ($http) {
    return {
        taskId:taskId,
        taskUpload:taskUpload,
        taskDelete:taskDelete,
        taskAdd:taskAdd,
        taskDownload:taskDownload,
        taskList:taskList,
        taskCount:taskCount,
        taskEdit:taskEdit
            
    };
    //根据id获取
    function  taskId(data) {
        return $http.get('/taskId/id',{
            params:data
        })
    }
    //上传
    function taskUpload(data){
        return $http.post('/taskUpload/upload',data)
    }
    //删除
    function taskDelete(data){
        return $http.get('/taskDelete/delete',{
            params:data
        })
    }
//添加
    function taskAdd(data){
        return $http.post('/taskAdd/add',data)
    }
//下载
    function taskDownload(data){
        return $http.post('/taskDownload/download',data)
    }
    //列表
    function  taskList(data) {
        return $http.get('/taskList/list',{
            params:data
        })
    }
    //总条数
    function  taskCount(data) {
        return $http.get('/taskCount/count',{
            params:data
        })
    }
    //编辑
    function taskEdit(data){
        return $http.post('/taskEdit/edit',data)
    }
});

var app = angular.module('taskServer',[]);
app.factory('taskSer',function ($http) {
    return {
        listTask : listTask,
        menuPermission:menuPermission,
        deleteTask:deleteTask,
        countTask:countTask,
        addTask:addTask,
        getTask:getTask,
        editTask:editTask,
        GetNo:GetNo,
        viewTask:viewTask,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/taskjoin/guidePermission/'+data);
    }
    function listTask(data){
        return $http.get('/taskjoin/list',{params:data})
    }
    function countTask(){
        return $http.get('/taskjoin/count')
    }
    function GetNo(){
        return $http.get('/workjoin/getNum')
    }
    function deleteTask(data){
        return $http.get('/taskjoin/delete',{params:data})
    }

    function addTask(data){
        return $http.post('/taskjoin/add',data)
    }
    function getTask(data){
        return $http.get('/taskjoin/task',{params:data})
    }
    function editTask(data){
        return $http.post('/taskjoin/edit',data)
    }
    function viewTask(data){
        return $http.get('/taskjoin/listFile',{params:data})
    }


});

var app = angular.module('taskServer',[]);
app.factory('taskSer',function ($http) {
    return {
        assignmentList : assignmentList,
        searchList : searchList,
        addAssignment:addAssignment,
        editAssignment:editAssignment,
        findAssignmentId:findAssignmentId,
        countAssignment:countAssignment,
        deleteAssignment:deleteAssignment,
        listFileAssignment:listFileAssignment,
        uploadFileAssignment:uploadFileAssignment,
        exportAssignment:exportAssignment,
        downloadFileAssignment:downloadFileAssignment,
        deleteFileAssignment:deleteFileAssignment,
        nameAssignment:nameAssignment,
        getBiddingName:getBiddingName,
        permissionAssignment:permissionAssignment,
        gitNum:gitNum
    };
    function assignmentList(data) {
        return $http.get('/involvedprocessingtask/list',{
            params: data

        })
    }
    //搜索
    function searchList(data) {
        return $http.get('/involvedprocessingtask/search',{
            params: data

        })
    }

    //添加
    function addAssignment(data){
        return $http.post('/involvedprocessingtask/add',data)
    }
    //编辑
    function editAssignment(data){
        return $http.post('/involvedprocessingtask/edit',data)
    }
    //id查询
    function findAssignmentId(data){
        return $http.get('/involvedprocessingtask/task',{
            params:data
        })
    }
    //分页总条数
    function countAssignment(data){
        return $http.get('/involvedprocessingtask/count',{params:data})
    }
    //删除
    function deleteAssignment(data){

        return $http.get('/involvedprocessingtask/delete',{
            params: data

        })
    }
    //----------------------------------
    //文件附件列表
    function listFileAssignment(data){
        return $http.get('/listFileAssignment/listFile',{params:data})
    }
    //上传附件
    function uploadFileAssignment(data){
        return $http.post('/uploadFileAssignment/uploadFile',data)
    }
    //导出
    function exportAssignment(data){
        return $http.get('/exportAssignment/export',{params:data})
    }
    //文件下载
    function downloadFileAssignment(data){
        return $http.get('/downloadFileAssignment/downloadFile',{params:data})
    }
    //删除文件或文件夹
    function deleteFileAssignment(data){
        return $http.post('/deleteFileAssignment/deleteFile',data)
    }
    //获取内部名称
    function nameAssignment(){
        return $http.get('/nameAssignment/name')
    }
    //获取编号
    function gitNum(){
        return $http.get('/gitNum/num')
    }
    //编号查询
    function getBiddingName(data){
        return $http.get('/getBiddingName/name',{
            params:data
        })
    }
    //菜单权限
    function permissionAssignment(data) {
        return $http.get('/permissionAssignment/permissionAssignment/'+data);
    }
});

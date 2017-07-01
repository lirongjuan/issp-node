var app = angular.module('confirmServer',[]);
app.factory('confirmSer',function ($http) {
    return {
        resultList : resultList,
        searchList : searchList,
        addResult:addResult,
        editResult:editResult,
        findResultId:findResultId,
        countResult:countResult,
        deleteResult:deleteResult,
        
        confirmListFile:confirmListFile,
        confirmUploadFile:confirmUploadFile,
        confirmExport:confirmExport,
        confirmDownloadFile:confirmDownloadFile,
        confirmDeleteFile:confirmDeleteFile,
        confirmName:confirmName,
        getBiddingName:getBiddingName,
        confirmPermission:confirmPermission,
        gitNum:gitNum
    };
    function resultList(data) {
        return $http.get('/problemhandlingresult/list',{
            params: data
        })
    }
    //搜索
    function searchList(data) {
        return $http.get('/problemhandlingresult/search',{
            params: data
        })
    }
    //添加
    function addResult(data){
        return $http.post('/problemhandlingresult/add',data)
    }
    //编辑
    function editResult(data){
        return $http.post('/problemhandlingresult/edit',data)
    }
    //id查询
    function findResultId(data){
        return $http.get('/problemhandlingresult/result',{
            params:data
        })
    }
    //分页总条数
    function countResult(data){
        return $http.get('/problemhandlingresult/count',{params:data})
    }
    //删除
    function deleteResult(data){

        return $http.get('/problemhandlingresult/delete',{
            params: data

        })
    }
    
    //----------------------------------
    //文件附件列表
    function confirmListFile(data){
        return $http.get('/confirmListFile/listFile',{params:data})
    }
    //上传附件
    function confirmUploadFile(data){
        return $http.post('/confirmUploadFile/uploadFile',data)
    }
    //导出
    function confirmExport(data){
        return $http.get('/confirmExport/export',{params:data})
    }
    //文件下载
    function confirmDownloadFile(data){
        return $http.get('/confirmDownloadFile/downloadFile',{params:data})
    }
    //删除文件或文件夹
    function confirmDeleteFile(data){
        return $http.post('/confirmDeleteFile/deleteFile',data)
    }
    //获取内部名称
    function confirmName(){
        return $http.get('/confirmName/name')
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
    function confirmPermission(data) {
        return $http.get('/confirmPermission/confirmPermission/'+data);
    }
});

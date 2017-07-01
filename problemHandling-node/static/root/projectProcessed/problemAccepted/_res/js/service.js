var app = angular.module('problemServer',[]);
app.factory('problemSer',function ($http) {
    return {
        ProblemList : ProblemList,
        searchList : searchList,
        addProblem:addProblem,
        editProblem:editProblem,
        findProblemId:findProblemId,
        countProblem:countProblem,
        deleteProblem:deleteProblem,
        problemListFile:problemListFile,
        problemUploadFile:problemUploadFile,
        problemExport:problemExport,
        problemDownloadFile:problemDownloadFile,
        problemDeleteFile:problemDeleteFile,
        gitDegree:gitDegree,
        problemPermission:problemPermission,
        problemName:problemName
    };
    function ProblemList(data) {
        return $http.get('/problemaccept/listProblemAccept',{
            params: data

        })
    }
    //搜索
    function searchList(data) {
        return $http.get('/problemaccept/search',{
            params: data

        })
    }

    //添加
    function addProblem(data){
        return $http.post('/problemaccept/add',data)
    }
    //编辑
    function editProblem(data){
        return $http.post('/problemaccept/edit',data)
    }
    //id查询
    function findProblemId(data){
        return $http.get('/problemaccept/problem',{
            params:data
        })
    }
    //分页总条数
    function countProblem(data){
        return $http.get('/problemaccept/count',{params:data})
    }
    //删除
    function deleteProblem(data){

        return $http.get('/problemaccept/delete',{
            params: data

        })
    }
    //----------------------------------
    //文件附件列表
    function problemListFile(data){
        return $http.get('/problemListFile/listFile',{params:data})
    }
    //上传附件
    function problemUploadFile(data){
        return $http.post('/problemUploadFile/uploadFile',data)
    }
    //导出
    function problemExport(data){
        return $http.get('/problemExport/export',{params:data})
    }
    //文件下载
    function problemDownloadFile(data){
        return $http.get('/downloadFileAssignment/downloadFile',{params:data})
    }
    //删除文件或文件夹
    function problemDeleteFile(data){
        return $http.post('/problemDeleteFile/deleteFile',data)
    }
    //获取内部名称
    function problemName(){
        return $http.get('/problemName/name')
    }
    //编号查询
    function gitDegree(data){
        return $http.get('/gitDegree/degree',{
            params:data
        })
    }
    //菜单权限
    function problemPermission(data) {
        return $http.get('/problemPermission/problemPermission/'+data);
    }
});

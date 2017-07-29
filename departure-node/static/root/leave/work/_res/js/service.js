var app = angular.module('workServer',[]);
app.factory('workSer',function ($http) {
    return {
        workList : workList,
        workAdd:workAdd,
        workEdit:workEdit,
        workId:workId,
        workCount:workCount,
        workDelete:workDelete,
        
        workPeople:workPeople,
        workHead:workHead,
        workUploadFile:workUploadFile,
        workDownloadFile:workDownloadFile,
        workDeleteFile:workDeleteFile,
        workListFile:workListFile,
        workName:workName,
        workedName:workedName,
        workGuide:workGuide
    };
    function workList(data) {
        return $http.get('/workList/list',{
            params: data

        })
    }
    //添加
    function workAdd(data){
        return $http.post('/workAdd/add',data)
    }
    //编辑
    function workEdit(data){
        return $http.post('/workEdit/edit',data)
    }
    //id查询
    function workId(data){
        return $http.get('/workId/Id',{
            params:data
        })
    }
    //分页总条数
    function workCount(data){
        return $http.get('/workCount/count',{params:data})
    }
    //删除
    function workDelete(data){
        return $http.get('/workDelete/delete',{
            params: data

        })
    }
    //----------------------------------------------------------
    //交接人确认
    function workPeople(data){
        return $http.post('/workPeople/people',data)
    }
    //福利模块负责人确认
    function workHead(data){
        return $http.post('/workHead/head',data)
    }
    //功能导航权限
    function workGuide(data){
        return $http.get('/workGuide/guide/'+data)
    }
    //文件附件列表
    function workListFile(data){
        return $http.get('/workListFile/listFile',{params:data})
    }
    //上传附件
    function workUploadFile(data){
        return $http.post('/workUploadFile/uploadFile',data)
    }
    //文件下载
    function workDownloadFile(data){
        return $http.get('/workDownloadFile/downloadFile',{params:data})
    }
    //删除文件或文件夹
    function workDeleteFile(data){
        return $http.post('/workDeleteFile/deleteFile',data)
    }
    //交接人姓名
    function workName(data){

        return $http.get('/workName/name',{
            params: data

        })
    }
     //被交接人姓名
    function workedName(data){

        return $http.get('/workedName/name',{
            params: data

        })
    }
    // //获取网站名称
    // function websiteName(data){

    //     return $http.get('/websiteName/name',{
    //         params: data

    //     })
    // }
    // //获取所有项目名称
    // function getProjectName(){
    //     return $http.get('/getProjectName/projectName')
    // }
});

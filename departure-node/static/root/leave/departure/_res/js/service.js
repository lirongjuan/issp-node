var app = angular.module('deparServer',[]);
app.factory('deparSer',function ($http) {
    return {
        deparList:deparList,
        deparAdd:deparAdd,
        deparEdit:deparEdit,
        deparId:deparId,
        deparCount:deparCount,
        deparDelete:deparDelete,
        deparSummary:deparSummary,
        deparGuide:deparGuide,
        deparListFile:deparListFile,
        deparUploadFile:deparUploadFile,
        deparDownloadFile:deparDownloadFile,
        deparDeleteFile:deparDeleteFile,
        deparSummaryWhy:deparSummaryWhy,
        deparHead:deparHead,    //负责人面谈
        deparManager:deparManager,    //项目经理面谈
        deparAudit:deparAudit,    //总经办审核
        deparSalary:deparSalary,    //确认薪资情况
        deparEditDeparture:deparEditDeparture,    //修改离职类型
        deparDeparture:deparDeparture,    //确认离职
        getBranch:getBranch,
        getJob:getJob
    };
    function deparList(data) {
        return $http.get('/deparList/list',{
            params: data

        })
    }
    //添加
    function deparAdd(data){
        return $http.post('/deparAdd/add',data)
    }
    //编辑
    function deparEdit(data){
        return $http.post('/deparEdit/edit',data)
    }
    //id查询
    function deparId(data){
        return $http.get('/deparId/Id',{
            params:data
        })
    }
    //分页总条数
    function deparCount(data){
        return $http.get('/deparCount/count',{params:data})
    }
    //删除
    function deparDelete(data){
        return $http.get('/deparDelete/delete',{
            params: data
        })
    }
    //汇总
    function deparSummary(data) {
        return $http.get('/deparSummary/collect')
    }
    //原因汇总
    function deparSummaryWhy(data) {
        return $http.get('/deparSummaryWhy/collect')
    }
    //功能导航权限
    function deparGuide(data){
        return $http.get('/deparGuide/guide/'+data)
    }
    //文件附件列表
    function deparListFile(data){
        return $http.get('/deparListFile/listFile',{params:data})
    }
    //上传附件
    function deparUploadFile(data){
        return $http.post('/deparUploadFile/uploadFile',data)
    }
    //文件下载
    function deparDownloadFile(data){
        return $http.get('/deparDownloadFile/downloadFile',{params:data})
    }
    //删除文件或文件夹
    function deparDeleteFile(data){
        return $http.post('/deparDeleteFile/deleteFile',data)
    }
//-----------------
    //负责人面谈
    function deparHead(data){
        return $http.post('/deparHead/head',data)
    }
    //项目经理面谈
    function deparManager(data){
        return $http.post('/deparManager/manager',data)
    }
    //总经办审核
    function deparAudit(data){
        return $http.post('/deparAudit/audit',data)
    }
    //修改离职类型
    function deparEditDeparture(data){
        return $http.post('/deparEditDeparture/editDeparture',data)
    }
    //确认薪资情况
    function deparSalary(data){
        return $http.post('/deparSalary/salary',data)
    }
    //确认离职
    function deparDeparture(data){
        return $http.post('/deparDeparture/departure',data)
    }
    //部门
    function getBranch(data){
        return $http.get('/getBranch/branch',{
            params: data

        })
    }
    //岗位
    function getJob(data){
        return $http.get('/getJob/job',{
            params: data

        })
    }
//----------------







    
    // //获取所有项目名称
    // function getProjectName(){
    //     return $http.get('/getProjectName/projectName')
    // }
    
});

var app = angular.module('recordServer',[]);
app.factory('recordSer',function ($http) {
    return {
        moneyList : moneyList,
        countRecord:countRecord,
        moneyDelete:moneyDelete,
        moneyAdd:moneyAdd,
        moneyEdit:moneyEdit,
        moneyMonthAll:moneyMonthAll,
        moneyConditionsAll:moneyConditionsAll,
        moneyAll:moneyAll,
        moneyId:moneyId,
        //moneyAnalyze:moneyAnalyze,
        moneyArea:moneyArea,
        moneyProject:moneyProject,
        moneyGroup:moneyGroup,
        areas:areas,
        projects:projects,
        projectGroups:projectGroups,
        moneyPermission:moneyPermission,
        moneyListFile:moneyListFile,
        moneyUploadFile:moneyUploadFile,
        moneyDownloadFile:moneyDownloadFile,
        moneyDeleteFile:moneyDeleteFile

    };
    //列表
    function  moneyList(data) {
        return $http.get('/moneyList/list',{
            params:data
        })
    }
    //分页
    function countRecord(){
        return $http.get('/countRecord')
    };
    //删除
    function moneyDelete(data){
        return $http.get('/moneyDelete/delete',{
            params:data
        })
    }
    //添加
    function moneyAdd(data){
        return $http.post('/moneyAdd/add',data)
    }
    //编辑
    function moneyEdit(data){
        return $http.post('/moneyEdit/edit',data)
    }
    //月汇总
    function moneyMonthAll(data){
        return $http.get('/moneyMonthAll/month',{
            params:data
        })
    }
    //条件汇总
    function moneyConditionsAll(data){
        return $http.post('/moneyConditionsAll/conditions',data)
    }
    //分析
    //function moneyAnalyze(data){
    //    return $http.post('/moneyAnalyze/analyze',data)
    //}
    //地区分析
    function moneyArea(data){
       return $http.post('/moneyArea/Area',data)
    }
    //项目分析
    function moneyProject(data){
       return $http.post('/moneyProject/Project',data)
    }
    //项目组分析
    function moneyGroup(data){
       return $http.post('/moneyGroup/Group',data)
    }
    //查询总记录
    function moneyAll(data){
        return $http.get('/moneyAll/all',{
            params:data
        })
    }
    //根据id查询资金流水
    function moneyId(data){
        return $http.get('/moneyId/id',{
            params:data
        })
    }
    //地区列表
    function areas(data){
        return $http.get('/areas/area',{
            params:data
        })
    }
    //项目组列表
    function projects(data){
        return $http.get('/projects/project',{
            params:data
        })
    }
    //项目名称列表
    function projectGroups(data){
        return $http.get('/projectGroups/projectGroup',{
            params:data
        })
    }
    //-----------------------------------------------
    //菜单权限
    function moneyPermission(data) {
        return $http.get('/moneyPermission/moneyPermission/'+data);
    }
    //文件附件列表
    function moneyListFile(data){
        return $http.get('/moneyListFile/listFile',{params:data})
    }
    //上传附件
    function moneyUploadFile(data){
        return $http.post('/moneyUploadFile/uploadFile',data)
    }
    //文件下载
    function moneyDownloadFile(data){
        return $http.get('/moneyDownloadFile/downloadFile',{params:data})
    }
    //删除文件或文件夹
    function moneyDeleteFile(data){
        return $http.post('/moneyDeleteFile/deleteFile',data)
    }
});

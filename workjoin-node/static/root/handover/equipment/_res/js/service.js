var app = angular.module('equipmentServer',[]);
app.factory('equipmentSer',function ($http) {
    return {
        equipmentUpload:equipmentUpload,
        equipmentAdd:equipmentAdd,
        equipmentList:equipmentList,
        equipmentDownload:equipmentDownload,
        equipmentCount:equipmentCount,
        equipmentEdit:equipmentEdit,
        equipmentId:equipmentId,
        equipmentDelete:equipmentDelete
    };
//上传
    function equipmentUpload(data){
        return $http.post('/equipmentUpload/upload',data)
    }
//添加
    function equipmentAdd(data){
        return $http.post('/equipmentAdd/add',data)
    }
//列表
    function  equipmentList(data) {
        return $http.get('/equipmentList/list',{
            params:data
        })
    }
//下载
    function equipmentDownload(data){
        return $http.post('/equipmentDownload/download',data)
    }
//总条数
    function  equipmentCount(data) {
        return $http.get('/equipmentCount/count',{
            params:data
        })
    }
//编辑
    function equipmentEdit(data){
        return $http.post('/equipmentEdit/edit',data)
    }
//根据id获取绩效指标数据
    function  equipmentId(data) {
        return $http.get('/equipmentId/id',{
            params:data
        })
    }        
//删除
    function equipmentDelete(data){
        return $http.get('/equipmentDelete/delete',{
            params:data
        })
    }    
});

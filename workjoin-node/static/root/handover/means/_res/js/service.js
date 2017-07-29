var app = angular.module('meansServer',[]);
app.factory('meansSer',function ($http) {
    return {
        meansUpload:meansUpload,
        meansDelete:meansDelete,  
        meansList:meansList,
        meansId:meansId,
        meansEdit:meansEdit,
        meansCount:meansCount,
        meansDownload:meansDownload,
        meansAdd:meansAdd  

    };
    //上传
    function  meansUpload(data) {
        return $http.get('/meansUpload/upload',{
            params:data
        })
    }
//删除
    function meansDelete(data){
        return $http.get('/meansDelete/delete',{
            params:data
        })
    }    
//列表
    function  meansList(data) {
        return $http.get('/meansList/list',{
            params:data
        })
    }
//根据id获取绩效指标数据
    function  meansId(data) {
        return $http.get('/meansId/id',{
            params:data
        })
    }
//编辑
    function meansEdit(data){
        return $http.post('/meansEdit/edit',data)
    }

//总条数
    function  meansCount(data) {
        return $http.get('/meansCount/count',{
            params:data
        })
    }
//下载
    function  meansDownload(data) {
        return $http.get('/meansDownload/download',{
            params:data
        })
    }
//添加
    function meansAdd(data){
        return $http.post('/meansAdd/add',data)
    }
});

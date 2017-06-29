var app = angular.module('MaterialServer',[]);
app.factory('MaterialSer',function ($http) {
    return {
        sourceList : sourceList,
        addSource:addSource,
        editSource:editSource,
        findSourceId:findSourceId,
        countSource:countSource,
        deleteSource:deleteSource,
        getProjectName:getProjectName,
        getBiddingNum:getBiddingNum,
        biddingNumber:biddingNumber,
        MaterialFiles:MaterialFiles,//文件附件列表
        MaterialPermission:MaterialPermission
    };
    //菜单权限
    function MaterialPermission(data) {
        return $http.get('/MaterialPermission/MaterialPermission/'+data);
    }
    function sourceList(data) {
        return $http.get('/tenderinfo/list',{
            params: data
        })
    }

    //添加
    function addSource(data){
        return $http.post('/tenderinfo/add',data)
    }
    //编辑
    function editSource(data){
        return $http.post('/tenderinfo/edit',data)
    }
    //id查询
    function findSourceId(data){
        return $http.get('/tenderinfo/info',{
            params:data
        })
    }
    //分页总条数
    function countSource(){
        return $http.get('/tenderinfo/count')
    }
    //删除
    function deleteSource(data){
        return $http.get('/tenderinfo/delete',{
            params: data
        })
    }
    //获取所有项目名称
    function getProjectName(){
        return $http.get('/getProjectName/projectName')
    }
    //编号查询
    function getBiddingNum(data){
        return $http.get('/getBiddingNum/num',{
            params:data
        })
    }
    //获取所有编号
    function biddingNumber(){
        return $http.get('/biddingNumber/num')
    }
    //文件附件列表
    function MaterialFiles(data) {
        return $http.get('/materialFiles/files',{
            params:data
        })
    }
});

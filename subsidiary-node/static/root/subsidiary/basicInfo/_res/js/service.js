var app = angular.module('basicInfoServer',[]);
app.factory('basicInfoSer',function ($http) {
    return {
        listBasicInfo:listBasicInfo,
        countInfo:countInfo,
        addBasicInfo:addBasicInfo,
        editBasicInfo:editBasicInfo,
        findInfoId:findInfoId,
        deleteBasicInfo:deleteBasicInfo,
        summaryBasicInfo:summaryBasicInfo,
        listSummaryArea:listSummaryArea
    };
    function listBasicInfo(data) {
        return $http.get('/listBasicInfo/list',{
            params: data
        })
    }
    //分页总条数
    function countInfo(){
        return $http.get('/countInfo/count')
    }
    //添加
    function addBasicInfo(data){
        return $http.post('/addBasicInfo/add',data)
    }
    //编辑
    function editBasicInfo(data){
        return $http.post('/editBasicInfo/edit',data)
    }
    //id查询
    function findInfoId(data){
        return $http.get('/findInfoId/info',{
            params:data
        })
    }
    //删除
    function deleteBasicInfo(data){
        return $http.get('/deleteBasicInfo/delete',{
            params: data
        })
    }
    //汇总
    function summaryBasicInfo(data){
        return $http.get('/summaryBasicInfo/summary?areas='+data.join(','))
    }
    //查询所有地区
    function  listSummaryArea() {
        return $http.get('/listSummaryArea/id')
    }
});

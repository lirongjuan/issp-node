var app = angular.module('inRecordServer',[]);
app.factory('inRecordSer',function ($http) {
    return {
        menuPermission : menuPermission,
        countRecord : countRecord,
        recordList : recordList,
        recordArea : recordArea,
        recordDep : recordDep,
        recordMat : recordMat,
        recordState : recordState,
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/inventoryrecord/guidePermission/'+data);
    }
    //查找总记录数
    function countRecord(data){
        return $http.get('/inventoryrecord/count',{params:data})
    }
    //盘点列表
    function recordList(data) {
            return $http.get('/inventoryrecord/list',{
                params: data
            })
        }
    //地区汇总
    function recordArea(data) {
        return $http.get('/inventoryrecord/areaCount',{
            params: data
        })
    }
    //部门汇总
    function recordDep(data) {
        return $http.get('/inventoryrecord/areaCount',{
            params: data
        })
    }
    //物资名称汇总
    function recordMat(data) {
        return $http.get('/inventoryrecord/materialNameCount',{
            params: data
        })
    }
    //状态汇总
    function recordState(data) {
        return $http.get('/inventoryrecord/stateCount',{
            params: data
        })
    }
});

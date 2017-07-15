var app = angular.module('usecarServer',[]);
app.factory('usecarSer',function ($http) {
    return {
        listUsecar : listUsecar,
        countRecord : countRecord,
        listArea:listArea,
        areaAna:areaAna,
        listProject:listProject,
        proAnalysis:proAnalysis,
        listDriver:listDriver,
        driAnalysis:driAnalysis,
        thawAngle:thawAngle,
        congealRecord:congealRecord,
        deleteRecord:deleteRecord,
        getRecord:getRecord,
    };
    //冻结
    function congealRecord(data){
        return $http.get('dispatchcarinfo/freeze',{params:data})
    }
    //解冻
    function thawAngle(data){
        return $http.get('/dispatchcarinfo/unfreeze',{params:data})
    }
    //删除
    function deleteRecord(data){
        return $http.get('/',{params:data})
    }
    //根据id来查询所有出车记录信息
    function getRecord(data){
        return $http.get('/dispatchcarinfo/find',{params:data})
    }

    function listUsecar(data) {
        return $http.get('/listUsecar',{params:data})
    }
    function countRecord() {
        return $http.get('/countRecord')
    }
    function listArea(data) {
        return $http.get('/listArea',{params:data})
    }
    function areaAna(data) {
        return $http.get('/areaAna',{params:data})
    }
    function listProject(data) {
        return $http.get('/listProject',{params:data})
    }
    function proAnalysis(data) {
        return $http.get('/proAnalysis',{params:data})
    }
    function listDriver(data) {
        return $http.get('/listDriver',{params:data})
    }
    function driAnalysis(data) {
        return $http.get('/driAnalysis',{params:data})
    }
});

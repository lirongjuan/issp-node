var app = angular.module('paingServer',[]);
app.factory('paingSer',function ($http) {
    return {
        listPaying : listPaying,
        countPaying:countPaying,
        payingPermission:payingPermission,
        summaryArea:summaryArea,
        summaryDepartment:summaryDepartment,
        summaryEquip:summaryEquip

    };
    //菜单权限
    function payingPermission(data) {
        return $http.get('/payingPermission/payingPermission/'+data);
    }
    function listPaying(data) {
        return $http.get('/listPaying/list',{
            params: data
        })
    }
    //分页总条数
    function countPaying(data){
        return $http.get('/countPaying/count',{params:data})
    }
    //地区汇总
    function summaryArea(data) {
        return $http.get('/summaryArea/collect?areas='+data)
    }
    //部门汇总
    function summaryDepartment(data) {
        return $http.get('/summaryDepartment/collect?projects='+data)
    }
    //设备汇总
    function summaryEquip(data) {
        return $http.get('/summaryEquip/collect?projects='+data)
    }
});

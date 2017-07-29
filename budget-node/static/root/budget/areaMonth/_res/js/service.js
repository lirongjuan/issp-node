var app = angular.module('areaMonthServer',[]);
app.factory('areaMonthSer',function ($http) {
    return {
        listAreaMonth : listAreaMonth,
        countAreaMonth:countAreaMonth,
        listAreaCol:listAreaCol,
        collectByArea:collectByArea,
        collectByArea2:collectByArea2,
        listTheMonthArea:listTheMonthArea,
        menuPermission:menuPermission,
        warningCostProjects:warningCostProjects,
    };
    function listAreaMonth(data) {
        return $http.get('/listAreaMonth/list',{params:data})
    }
    function countAreaMonth() {
        return $http.get('/countAreaMonth/count')
    }
    //查询所有地区
    function  listAreaCol() {
        return $http.get('/listAreaCol/id')
    }
    //地区汇总
    function collectByArea(data) {
        return $http.post('/collectByArea/area',data)
     }
    //汇总
    function collectByArea2() {
        return $http.get('/collectByArea2/area')
    }
    //查询当月明细
    function  listTheMonthArea(data) {
        return $http.get('/listTheMonthArea/id',{params:data})
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/areaMonth/guidePermission/'+data);
    }
    //预警
    function warningCostProjects() {
        return $http.get('/warning/id')
    }
});

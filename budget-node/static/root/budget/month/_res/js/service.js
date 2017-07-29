var app = angular.module('monthServer',[]);
app.factory('monthSer',function ($http) {
    return {
        listProMonth : listProMonth,
        countProMonth:countProMonth,
        listMonthProject:listMonthProject,
        collectMonthProject:collectMonthProject,
        collectMonthProject2:collectMonthProject2,
        listTheMonthProject:listTheMonthProject,
        menuPermission:menuPermission,
        warningCostProjects:warningCostProjects,
    };
    function listProMonth(data) {
        return $http.get('/listProMonth/list',{params:data})
    }
    function countProMonth() {
        return $http.get('/countProMonth/count')
    }
    //查询所有项目
    function  listMonthProject() {
        return $http.get('/listMonthProject/id')
    }
    //项目汇总
    function collectMonthProject(data) {
        return $http.post('/collectMonthProject/project',data)
    }
    //汇总
    function collectMonthProject2() {
        return $http.get('/collectMonthProject2/project')
    }
    //查询当月明细
    function  listTheMonthProject(data) {
        return $http.get('/listTheMonthProject/id',{params:data})
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/month/guidePermission/'+data);
    }
    //预警
    function warningCostProjects() {
        return $http.get('/warning/id')
    }
});

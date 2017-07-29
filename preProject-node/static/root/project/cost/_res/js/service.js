var app = angular.module('costServer',[]);
app.factory('costSer',function ($http) {
    return {
        listCost : listCost,
        countCost:countCost,
        addCost:addCost,
        getCost:getCost,
        editCost:editCost,
        deleteCost:deleteCost,
        allGrade:allGrade,
        collectArea:collectArea,
        listCostById:listCostById,
        collectName:collectName,
        collectProject:collectProject,
        collectAreaDetails:collectAreaDetails,
        listCostById2:listCostById2,
        menuPermission:menuPermission,
    };
    function listCost(data) {
        return $http.get('/listCost/list',{params:data})
    }
    function countCost() {
        return $http.get('/countCost/count')
    }
    function addCost(data) {
        return $http.post('/addCost/add',data)
    }
    function getCost(data) {
        return $http.get('/getCost/id',{params:data})
    }
    function editCost(data) {
        return $http.post('/editCost/edit',data)
    }
    function deleteCost(data) {
        return $http.get('/deleteCost/del',{params:data})
    }
    //获取所有等级
    function allGrade(){
        return $http.get('/allGrade/id')
    }
    //获取所有年份
    function listCostById() {
        return $http.get('/listCostById/list/id')
    }
    //获取所有月份
    function listCostById2() {
        return $http.get('/listCostById2/list/id')
    }
    //地区汇总
    function collectArea(data) {
        return $http.post('/collectArea/area',data)
    }
    //项目名称汇总
    function collectName(data) {
        return $http.post('/collectName/name',data)
    }
    //项目组汇总
    function collectProject(data) {
        return $http.post('/collectProject/pro',data)
    }
  //地区汇总详情
    function collectAreaDetails(data) {
        return $http.get('/collectAreaDetails/id',{params:data})
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/cost/guidePermission/'+data);
    }
});

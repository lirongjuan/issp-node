var app = angular.module('IncomeServer',[]);
app.factory('IncomeSer',function ($http) {
    return {
        listIncome : listIncome,
        menuPermission:menuPermission,
        deleteIncome:deleteIncome,
        countIncome:countIncome,
        getIncome:getIncome,
        editIncome:editIncome,
        getAreaAll:getAreaAll,
        getGroupAll:getGroupAll,
        addIncome:addIncome,
        areaIncome:areaIncome,
        groupIncome:groupIncome,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/incomecostanalysis/guidePermission/'+data);
    }
    function listIncome(data){
        return $http.get('/incomecostanalysis/list',{params:data})
    }
    function countIncome(){
        return $http.get('/incomecostanalysis/count')
    }
    function getGroupAll(){
        return $http.get('/incomecostanalysis/department')
    }
    function getAreaAll(){
        return $http.get('/incomecostanalysis/area')
    }
    function deleteIncome(data){
        return $http.get('/incomecostanalysis/delete',{params:data})
    }
    function addIncome(data){
        return $http.post('/incomecostanalysis/add',data)
    }
    function getIncome(data){
        return $http.get('/incomecostanalysis/analysis',{params:data})
    }
    function editIncome(data){
        return $http.post('/incomecostanalysis/edit',data)
    }
    function areaIncome(data){
        return $http.get('/incomecostanalysis/areaCollect',{params:data})
    }
    function groupIncome(data){
        return $http.get('/incomecostanalysis/departmentCollect',{params:data})
    }
});

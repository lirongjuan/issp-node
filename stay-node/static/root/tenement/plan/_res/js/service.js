var app = angular.module('planServer',[]);
app.factory('planSer',function ($http) {
    return {
        listPlan : listPlan,
        menuPermission:menuPermission,
        deletePlan:deletePlan,
        countPlan:countPlan,
        addPlan:addPlan,
        getPlan:getPlan,
        editPlan:editPlan,
        getAreaAll:getAreaAll,
        getUserAll:getUserAll,
        Getposition:Getposition,
        getGroupAll:getGroupAll,
        aduitBusiness:aduitBusiness,
        aduitfinance:aduitfinance,
        aduitResource:aduitResource,
        aduitManager:aduitManager,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/rentalPrecept/guidePermission/'+data);
    }
    function listPlan(data){
        return $http.get('/rentalPrecept/list',{params:data})
    }
    function countPlan(){
        return $http.get('/rentalPrecept/count')
    }
    function getUserAll() {
        return $http.get('/rentalPrecept/user')
    }
    function getGroupAll(){
        return $http.get('/rentalPrecept/department')
    }
    function getAreaAll(){
        return $http.get('/rentalPrecept/findArea')
    }
    function Getposition(){
        return $http.get('/rentalPrecept/position')
    }
    function deletePlan(data){
        return $http.get('/rentalPrecept/delete',{params:data})
    }
    function addPlan(data){
        return $http.post('/rentalPrecept/add',data)
    }
    function getPlan(data){
        return $http.get('/rentalPrecept/precept',{params:data})
    }
    function editPlan(data){
        return $http.post('/rentalPrecept/edit',data)
    }
    function aduitBusiness(data){
        return $http.post('/rentalPrecept/businessAudit',data)
    }
    function aduitfinance(data){
        return $http.post('/rentalPrecept/financeAudit',data)
    }
    function aduitResource(data){
        return $http.post('/rentalPrecept/resourceAudit',data)
    }
    function aduitManager(data){
        return $http.post('/rentalPrecept/manageAudit',data)
    }
});

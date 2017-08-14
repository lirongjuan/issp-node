var app = angular.module('applyServer',[]);
app.factory('applySer',function ($http) {
    return {
        listApply : listApply,
        listInfo:listInfo,
        menuPermission:menuPermission,
        deleteApply:deleteApply,
        countApply:countApply,
        addApply:addApply,
        getApply:getApply,
        editApply:editApply,
        getAreaAll:getAreaAll,
        getUserAll:getUserAll,
        getNumAll:getNumAll,
        Getposition:Getposition,
        getGroupAll:getGroupAll,
        ApplyBusiness:ApplyBusiness,
        Applyfinance:Applyfinance,
        ResourceApply:ResourceApply,
        ApplyManager:ApplyManager,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/rentalApply/guidePermission/'+data);
    }
    function listApply(data){
        return $http.get('/rentalApply/list',{params:data})
    }
    function listInfo(data){
        return $http.get('/rentalApply/rentInfo',{params:data})
    }
    function countApply(){
        return $http.get('/rentalApply/count')
    }
    function getUserAll() {
        return $http.get('/rentalPrecept/user')
    }
    function getNumAll(){
        return $http.get('/rentalPrecept/getNum')
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
    function deleteApply(data){
        return $http.get('/rentalApply/delete',{params:data})
    }
    function addApply(data){
        return $http.post('/rentalApply/add',data)
    }
    function getApply(data){
        return $http.get('/rentalApply/apply',{params:data})
    }
    function editApply(data){
        return $http.post('/rentalApply/edit',data)
    }
    function ApplyBusiness(data){
        return $http.post('/rentalApply/businessAudit',data)
    }
    function Applyfinance(data){
        return $http.post('/rentalApply/financeAudit',data)
    }
    function ResourceApply(data){
        return $http.post('/rentalApply/resourceAudit',data)
    }
    function ApplyManager(data){
        return $http.post('/rentalApply/manageAudit',data)
    }
});

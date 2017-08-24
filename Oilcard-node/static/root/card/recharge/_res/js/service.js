var app = angular.module('rechargeServer',[]);
app.factory('rechargeSer',function ($http) {
    return {
        listRecharge : listRecharge,
        menuPermission:menuPermission,
        countRecharge:countRecharge,
       /* deleteRecharge:deleteRecharge,*/
        addRecharge:addRecharge,
        getRecharge:getRecharge,
        editRecharge:editRecharge,
        GetNo:GetNo,
        viewRecharge:viewRecharge,
        RechargeCollect:RechargeCollect,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/recharge/guidePermission/'+data)
    }
    function listRecharge(data){
        return $http.get('/recharge/list',{params:data})
    }
    function countRecharge(){
        return $http.get('/recharge/count')
    }
    function addRecharge(data){
        return $http.post('/recharge/add',data)
    }
    function getRecharge(data){
        return $http.get('/recharge/find',{params:data})
    }
    function editRecharge(data){
        return $http.post('/recharge/edit',data)
    }
    function GetNo(){
        return $http.get('/receive/find/oilcard')
    }
    function viewRecharge(data){
        return $http.get('/recharge/files',{params:data})
    }
    function RechargeCollect(data){
        return $http.get('/recharge/collect',{params:data})
    }
});

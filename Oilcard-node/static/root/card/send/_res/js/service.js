var app = angular.module('sendServer',[]);
app.factory('sendSer',function ($http) {
    return {
        GetNo:GetNo,
        menuPermission:menuPermission,
        sendCollect:sendCollect,
        sendAnalyse:sendAnalyse,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/recharge/guide/permission/'+data);
    }
    function GetNo(){
        return $http.get('/receive/find/oilcard')
    }
    function sendCollect(data){
        return $http.post('/recharge/pageList',data)
    }
    function sendAnalyse(data){
        return $http.post('/recharge/analyze',data)
    }

});
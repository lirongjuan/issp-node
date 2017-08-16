var app = angular.module('paidServer',[]);
app.factory('paidSer',function ($http) {
    return {
        listPaid : listPaid,
        menuPermission:menuPermission,
        countPaid:countPaid,
        PayWait:PayWait,
        getMoneyAll:getMoneyAll,
        getAreaAll:getAreaAll,
        getGroupAll:getGroupAll,
        areaPaid:areaPaid,
        groupPaid:groupPaid,
        listSelect:listSelect,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/waitpay/guidePermission/'+data);
    }
    function listPaid(data){
        return $http.get('/waitpay/pays',{params:data})
    }
    function countPaid(){
        return $http.get('/waitpay/waitPayCount')
    }
    function getMoneyAll(){
        return $http.get('/waitpay/listAccountCom')
    }
    function PayWait(data){
        return $http.post('/waitpay/payCount',data)
    }
    function getAreaAll(){
        return $http.get('/waitpay/allAreas')
    }
    function getGroupAll(){
        return $http.get('/waitpay/allProjectGroups')
    }
    function areaPaid(data){
        return $http.get('/waitpay/areaCount',{params:data})
    }
    function groupPaid(data){
        return $http.get('/iwaitpay/projectGroupCount',{params:data})
    }
    function listSelect(data){
        return $http.get('/waitpay/difference',{params:data})
    }
});

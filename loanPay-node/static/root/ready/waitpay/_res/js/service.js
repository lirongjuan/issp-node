var app = angular.module('waitpayServer',[]);
app.factory('waitpaySer',function ($http) {
    return {
        listWait : listWait,
        menuPermission:menuPermission,
        countWait:countWait,
        PayWait:PayWait,
        getMoneyAll:getMoneyAll,
        getWait:getWait,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/waitpay/guidePermission/'+data);
    }
    function listWait(data){
        return $http.get('/waitpay/waitPays',{params:data})
    }
    function countWait(){
        return $http.get('/waitpay/waitPayCount')
    }
    function getMoneyAll(){
        return $http.get('/waitpay/listAccountCom')
    }
    function PayWait(data){
        return $http.post('/waitpay/pay',data)
    }
    function getWait(data){
        return $http.get('/waitpay/findWait',{params:data})
    }

});

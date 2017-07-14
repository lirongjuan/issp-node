var app = angular.module('summaryServer',[]);
app.factory('summarySer',function ($http) {
    return {
        bankSelf:bankSelf,
        listAccount:listAccount,
        collectlistInfo:collectlistInfo,
        analyselistInfo:analyselistInfo,
        constrastlistInfo:constrastlistInfo,
        menuPermission:menuPermission,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/collect/guidePermission/'+data);
    }
    function bankSelf(data) {
        return $http.get('/bankself',{params:data})
    }
    function listAccount() {
        return $http.get('/listaccount')
    }

    function collectlistInfo(data){
        return $http.post('/collectlistInfo',data)
    }
    function analyselistInfo(data){
        return $http.post('/analyselistInfo',data)
    }
    function constrastlistInfo(data){
        return $http.get('/constrastlistInfo',{params:data})
    }
});
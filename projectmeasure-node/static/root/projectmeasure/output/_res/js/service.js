var app = angular.module('apple',[]);
app.factory('outputSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listSummary : listSummary,
        countBaseInfo:countBaseInfo
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/otherDemand/guidePermission/'+data);
    }
    //列表
    function listSummary(data) {
        return $http.get('/projectmeasure/output/list',{
            params:data  
        })
    }
    //分页
    function countBaseInfo(){
        return $http.get('/projectmeasure/basicinfo/count')
    }
});

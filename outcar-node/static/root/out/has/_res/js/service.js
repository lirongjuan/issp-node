var app = angular.module('hasServer',[]);
app.factory('hasSer',function ($http) {
    return {
        listHas : listHas,
        countHas:countHas,
        summaryHas:summaryHas,
        menuPermission:menuPermission,
        summaryArea:summaryArea,
        summaryUse:summaryUse
    };
    //列表
    function listHas(data) {
        return $http.get('/listHas/list',{
            params:data
        })
    }
    //分页
    function countHas(){
        return $http.get('/countHas/count')
    }
    function summaryHas() {
        return $http.get('/summaryDriver/has')
    }
    function summaryArea() {
        return $http.get('/summaryArea/area')
    }
    function summaryUse() {
        return $http.get('/summaryUse/use')
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/wait/guidePermission/'+data);
    }
});

var app = angular.module('hasServer',[]);
app.factory('hasSer',function ($http) {
    return {
        listHas : listHas,
        countHas:countHas,
        summaryHas:summaryHas,
        contrastHas:contrastHas,
        menuPermission:menuPermission,
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
    function summaryHas(data) {
        return $http.post('/summaryHas/has',data)
    }
    function contrastHas(data) {
        return $http.post('/contrastHas/has',data)
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/wait/guidePermission/'+data);
    }
});

var app = angular.module('waitServer',[]);
app.factory('waitSer',function ($http) {
    return {
        listWait : listWait,
        countWait:countWait,
        deleteWait:deleteWait,
        menuPermission:menuPermission,
        getOneById:getOneById,
        payByOne:payByOne
    };
    //列表
    function listWait(data) {
        return $http.get('/listWait/list',{
            params:data
        })
    }
    //分页
    function countWait(){
        return $http.get('/countWait/count')
    }
    //删除
    function deleteWait(data){
        return $http.get('/deleteWait/delete',{params:data})
    }
    function getOneById(data) {
        return $http.get('/payWait/getOneById',{params:data})
    }
    function payByOne(data){
        return $http.post('/payByOne/pay',data)
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/wait/guidePermission/'+data);
    }
});

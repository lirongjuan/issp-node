var app = angular.module('basicInfoServer',[]);
app.factory('basicInfoSer',function ($http) {
    return {
        listBasic : listBasic,
        menuPermission:menuPermission,
        deleteBasic:deleteBasic,
        countBasic:countBasic,
        getBasic:getBasic,
        editBasic:editBasic,
        collectBasic:collectBasic,
        getAreaCollect:getAreaCollect,
        viewBasic:viewBasic
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/rental/guidePermission/'+data);
    }
    function listBasic(data){
        return $http.get('/rental/list',{params:data})
    }
    function countBasic(){
        return $http.get('/rental/count')
    }
    function deleteBasic(data){
        return $http.get('/rental/delete',{params:data})
    }
    function getBasic(data){
        return $http.get('/rental/rental',{params:data})
    }
    function editBasic(data){
        return $http.post('/rental/edit',data)
    }
    function collectBasic(data){
        return $http.post('/rental/collect',data)
    }
    function getAreaCollect(){
        return $http.get('/rental/areas')
    }
    function viewBasic(data){
        return $http.get('/rental/listFile',{params:data})
    }
});

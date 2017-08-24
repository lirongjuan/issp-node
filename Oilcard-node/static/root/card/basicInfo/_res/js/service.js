var app = angular.module('basicInfoServer',[]);
app.factory('basicInfoSer',function ($http) {
    return {
        listBasic : listBasic,
        menuPermission:menuPermission,
        deleteBasic:deleteBasic,
        countBasic:countBasic,
        addBasic:addBasic,
        getBasic:getBasic,
        editBasic:editBasic,
        congealBasic:congealBasic,
        thawBasic:thawBasic,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/basic/guidePermission/'+data);
    }
    function listBasic(data){
        return $http.get('/basic/list',{params:data})
    }
    function countBasic(){
        return $http.get('/basic/count')
    }
    function deleteBasic(data){
        return $http.get('/basic/delete',{params:data})
    }

    function addBasic(data){
        return $http.post('/basic/add',data)
    }
    function getBasic(data){
        return $http.get('/basic/find',{params:data})
    }
    function editBasic(data){
        return $http.post('/basic/edit',data)
    }
    function congealBasic(data){
        return $http.get('/basic/freeze',{params:data})
    }
    function thawBasic(data) {
        return $http.get('/basic/unfreeze',{params:data})
    }
});

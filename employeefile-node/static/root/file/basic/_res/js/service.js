var app = angular.module('basicServer',[]);
app.factory('basicSer',function ($http) {
    return {
        listBasic : listBasic,
        countBasic:countBasic,
        deleteBasic:deleteBasic,
        getOneById:getOneById,
        menuPermission:menuPermission,
        addBasic:addBasic,
        editBasic:editBasic,
        thawBasic:thawBasic,
        congealBasic:congealBasic
    };
    function listBasic(data) {
        return $http.get('/listBasic/list',{
            params:data
        })
    }
    function countBasic(){
        return $http.get('/countBasic/count')
    }
    function deleteBasic(data){
        return $http.get('/deleteBasic/delete',{params:data})
    }
    //冻结
    function congealBasic(data){
        return $http.get('/congealBasic/congeal',{
            params: data
        })
    }
    //解冻
    function thawBasic(data){
        return $http.get('/thawBasic/thaw',{
            params: data
        })
    }
    function menuPermission(data) {
        return $http.get('/basic/guidePermission/'+data);
    }
    function addBasic(data){
        return $http.post('/addBasic/add',data)
    }
    function getOneById(data) {
        return $http.get('/basic/getOneById',{params:data})
    }
    function editBasic(data){
        return $http.post('/editBasic/edit',data)
    }
});

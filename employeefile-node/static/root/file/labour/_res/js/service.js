var app = angular.module('labourServer',[]);
app.factory('labourSer',function ($http) {
    return {
        listLabour : listLabour,
        countLabour:countLabour,
        deleteLabour:deleteLabour,
        getOneById:getOneById,
        menuPermission:menuPermission,
        addLabour:addLabour,
        editLabour:editLabour,
        thawLabour:thawLabour,
        congealLabour:congealLabour
    };
    function listLabour(data) {
        return $http.get('/listLabour/list',{
            params:data
        })
    }
    function countLabour(){
        return $http.get('/countLabour/count')
    }
    function deleteLabour(data){
        return $http.get('/deleteLabour/delete',{params:data})
    }
    //冻结
    function congealLabour(data){
        return $http.get('/congealLabour/congeal',{
            params: data
        })
    }
    //解冻
    function thawLabour(data){
        return $http.get('/thawLabour/thaw',{
            params: data
        })
    }
    function menuPermission(data) {
        return $http.get('/labour/guidePermission/'+data);
    }
    function addLabour(data){
        return $http.post('/addLabour/add',data)
    }
    function getOneById(data) {
        return $http.get('/labour/getOneById',{params:data})
    }
    function editLabour(data){
        return $http.post('/editLabour/edit',data)
    }
});

var app = angular.module('annexServer',[]);
app.factory('annexSer',function ($http) {
    return {
        listAnnex : listAnnex,
        countAnnex:countAnnex,
        deleteAnnex:deleteAnnex,
        getOneById:getOneById,
        menuPermission:menuPermission,
        addAnnex:addAnnex,
        editAnnex:editAnnex,
        thawAnnex:thawAnnex,
        congealAnnex:congealAnnex
    };
    function listAnnex(data) {
        return $http.get('/listAnnex/list',{
            params:data
        })
    }
    function countAnnex(){
        return $http.get('/countAnnex/count')
    }
    function deleteAnnex(data){
        return $http.get('/deleteAnnex/delete',{params:data})
    }
    //冻结
    function congealAnnex(data){
        return $http.get('/congealAnnex/congeal',{
            params: data
        })
    }
    //解冻
    function thawAnnex(data){
        return $http.get('/thawAnnex/thaw',{
            params: data
        })
    }
    function menuPermission(data) {
        return $http.get('/annex/guidePermission/'+data);
    }
    function addAnnex(data){
        return $http.post('/addAnnex/add',data)
    }
    function getOneById(data) {
        return $http.get('/annex/getOneById',{params:data})
    }
    function editAnnex(data){
        return $http.post('/editAnnex/edit',data)
    }
});

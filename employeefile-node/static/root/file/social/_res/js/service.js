var app = angular.module('socialServer',[]);
app.factory('socialSer',function ($http) {
    return {
        listSocial : listSocial,
        countSocial:countSocial,
        deleteSocial:deleteSocial,
        getOneById:getOneById,
        menuPermission:menuPermission,
        addSocial:addSocial,
        editSocial:editSocial,
        thawSocial:thawSocial,
        congealSocial:congealSocial
    };
    function listSocial(data) {
        return $http.get('/listSocial/list',{
            params:data
        })
    }
    function countSocial(){
        return $http.get('/countSocial/count')
    }
    function deleteSocial(data){
        return $http.get('/deleteSocial/delete',{params:data})
    }
    //冻结
    function congealSocial(data){
        return $http.get('/congealSocial/congeal',{
            params: data
        })
    }
    //解冻
    function thawSocial(data){
        return $http.get('/thawSocial/thaw',{
            params: data
        })
    }
    function menuPermission(data) {
        return $http.get('/social/guidePermission/'+data);
    }
    function addSocial(data){
        return $http.post('/addSocial/add',data)
    }
    function getOneById(data) {
        return $http.get('/social/getOneById',{params:data})
    }
    function editSocial(data){
        return $http.post('/editSocial/edit',data)
    }
});

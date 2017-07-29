var app = angular.module('weekServer',[]);
app.factory('weekSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
        addContent:addContent,
        editContent:editContent,
        editStand:editStand
    };
    function menuPermission(data) {
        return $http.get('/week/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/week/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/week/count')
    }
    function deleteContent(data){
        return $http.get('/week/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/week/add',data)
    }
    function getOneById(data) {
        return $http.get('/week/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/week/edit',data)
    }
    function editStand(data){
        return $http.post('/standweek/edit',data)
    }
});

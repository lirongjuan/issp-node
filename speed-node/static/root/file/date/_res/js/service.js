var app = angular.module('dateServer',[]);
app.factory('dateSer',function ($http) {
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
        return $http.get('/date/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/date/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/date/count')
    }
    function deleteContent(data){
        return $http.get('/date/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/date/add',data)
    }
    function getOneById(data) {
        return $http.get('/date/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/date/edit',data)
    }
    function editStand(data){
        return $http.post('/stand/edit',data)
    }
});

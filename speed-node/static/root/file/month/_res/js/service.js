var app = angular.module('monthServer',[]);
app.factory('monthSer',function ($http) {
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
        return $http.get('/month/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/month/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/month/count')
    }
    function deleteContent(data){
        return $http.get('/month/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/month/add',data)
    }
    function getOneById(data) {
        return $http.get('/month/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/month/edit',data)
    }
    function editStand(data){
        return $http.post('/standmonth/edit',data)
    }
});

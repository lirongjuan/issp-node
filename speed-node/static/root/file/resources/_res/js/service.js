var app = angular.module('resourcesServer',[]);
app.factory('resourcesSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
        addContent:addContent,
        editContent:editContent,
    };
    function menuPermission(data) {
        return $http.get('/resources/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/resources/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/resources/count')
    }
    function deleteContent(data){
        return $http.get('/resources/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/resources/add',data)
    }
    function getOneById(data) {
        return $http.get('/resources/getOneById',{params:data})
    }
    function editContent(data){
        return $http.post('/resources/edit',data)
    }
});

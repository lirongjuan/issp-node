var app = angular.module('detailedServer',[]);
app.factory('detailedSer',function ($http) {
    return {
        listDetailed : listDetailed,
        countDetailed:countDetailed,
        deleteDetailed:deleteDetailed,
        getOneById:getOneById,
        menuPermission:menuPermission,
        addDetailed:addDetailed,
        editDetailed:editDetailed,
        nameMessage:nameMessage,
        viewQualifiedFile:viewQualifiedFile
    };
    function listDetailed(data) {
        return $http.get('/listDetailed/list',{
            params:data
        })
    }
    function countDetailed(){
        return $http.get('/countDetailed/count')
    }
    function deleteDetailed(data){
        return $http.get('/deleteDetailed/delete',{params:data})
    }
    function menuPermission(data) {
        return $http.get('/detailed/guidePermission/'+data);
    }
    function addDetailed(data){
        return $http.post('/addDetailed/add',data)
    }
    function getOneById(data) {
        return $http.get('/detailed/getOneById',{params:data})
    }
    function editDetailed(data){
        return $http.post('/editDetailed/edit',data)
    }
    function nameMessage(){
        return $http.get('/name/id')
    }
    function viewQualifiedFile(data){
        return $http.get('/detailed/listFile',{params:data})
    }
});

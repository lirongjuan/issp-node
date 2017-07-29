var app = angular.module('collectServer',[]);
app.factory('collectSer',function ($http) {
    return {
        listCollect : listCollect,
        countCollect:countCollect,
        deleteCollect:deleteCollect,
        getOneById:getOneById,
        menuPermission:menuPermission,
        addCollect:addCollect,
        editCollect:editCollect,
        nameMessage:nameMessage,
        viewQualifiedFile:viewQualifiedFile
    };
    function listCollect(data) {
        return $http.get('/listCollect/list',{
            params:data
        })
    }
    function countCollect(){
        return $http.get('/countCollect/count')
    }
    function deleteCollect(data){
        return $http.get('/deleteCollect/delete',{params:data})
    }
    function menuPermission(data) {
        return $http.get('/collect/guidePermission/'+data);
    }
    function addCollect(data){
        return $http.post('/addCollect/add',data)
    }
    function getOneById(data) {
        return $http.get('/collect/getOneById',{params:data})
    }
    function editCollect(data){
        return $http.post('/editCollect/edit',data)
    }
    function nameMessage(){
        return $http.get('/name/id')
    }
    function viewQualifiedFile(data){
        return $http.get('/collect/listFile',{params:data})
    }
});

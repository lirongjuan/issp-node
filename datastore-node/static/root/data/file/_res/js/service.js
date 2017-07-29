var app = angular.module('fileServer',[]);
app.factory('fileSer',function ($http) {
    return {
        listFile : listFile,
        countFile:countFile,
        addFile:addFile,
        deleteFile:deleteFile,
        editFile:editFile,
        getOneById:getOneById,
        menuPermission:menuPermission,
        viewFile:viewFile
    };
    function listFile(data) {
        return $http.get('/listFile/list',{
            params:data
        })
    }
    function countFile(){
        return $http.get('/listFile/count')
    }
    function deleteFile(data){
        return $http.get('/deleteFile/delete',{params:data})
    }
    function addFile(data){
        return $http.post('/addFile/add',data)
    }

    function menuPermission(data) {
        return $http.get('/file/guidePermission/'+data);
    }
    function editFile(data){
        return $http.post('/editFile/edit',data)
    }
    function getOneById(data) {
        return $http.get('/file/getOneById',{params:data})
    }
    function viewFile(data){
        return $http.get('/viewFile/listFile',{params:data})
    }
});

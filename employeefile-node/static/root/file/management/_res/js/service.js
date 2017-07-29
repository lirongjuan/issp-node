var app = angular.module('managementServer',[]);
app.factory('managementSer',function ($http) {
    return {
        listManagement : listManagement,
        countManagement:countManagement,
        getOneById:getOneById,
        viewManageFile:viewManageFile,
        menuPermission:menuPermission,
    };
    function listManagement(data) {
        return $http.get('/listManagement/list',{
            params:data
        })
    }
    function countManagement(){
        return $http.get('/countManagement/count')
    }
    function menuPermission(data) {
        return $http.get('/management/guidePermission/'+data);
    }
    function getOneById(data) {
        return $http.get('/management/getOneById',{params:data})
    }
    function viewManageFile(data){
        return $http.get('/viewManageFile/listFile',{params:data})
    }
});

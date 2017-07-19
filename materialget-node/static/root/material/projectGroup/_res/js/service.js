var app = angular.module('projectGroupServer',[]);
app.factory('projectGroupSer',function ($http) {
    return {
        listProject : listProject,
        countProject:countProject,
        deleteProject:deleteProject,
        menuPermission:menuPermission,
        getUserAll:getUserAll,
        allGetNo:allGetNo,
        addProject:addProject,
        getProject:getProject,
        editProject:editProject,
        reastProject:reastProject,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/projectgroupreceive/guidePermission/'+data);
    }
    function listProject(data) {
        return $http.get('/projectgroupreceive/list',{params:data})
    }
    function countProject(){
        return $http.get('/projectgroupreceive/count')
    }
    function deleteProject(data) {
        return $http.get('/projectgroupreceive/delete',{params:data})
    }
    function getUserAll() {
        return $http.get('/materialreceive/allGetPerson')
    }
    function allGetNo(){
        return $http.get('/materialreceive/allGetNo')
    }
    function addProject(data){
        return $http.post('/projectgroupreceive/add',data)
    }
    function getProject(data){
        return $http.get('/projectgroupreceive/groupreceive',{params:data})
    }
    function editProject(data){
        return $http.post('/projectgroupreceive/edit',data)
    }
    function reastProject(data){
        return $http.post('/projectgroupreceive/returnmaterial',data)
    }

});

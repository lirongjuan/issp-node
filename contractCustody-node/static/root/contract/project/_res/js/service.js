var app = angular.module('projectServer',[]);
app.factory('projectSer',function ($http) {
    return {
        listProject : listProject,
        menuPermission:menuPermission,
        countProject:countProject,
        deleteProject:deleteProject,
        addProject:addProject,
        getProinfo:getProinfo,
        editProinfo:editProinfo,
        viewProject:viewProject,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/projectcontract/guidePermission/'+data);
    }
    function listProject(data){
        return $http.get('/projectcontract/list',{params:data})
    }
    function countProject(){
        return $http.get('/projectcontract/count')
    }
    function deleteProject(data){
        return $http.get('/projectcontract/delete',{params:data})
    }
    function addProject(data){
        return $http.post('/projectcontract/add',data)
    }
    function getProinfo(data){
        return $http.get('/projectcontract/project',{params:data})
    }
    function editProinfo(data){
        return $http.post('/projectcontract/edit',data)
    }
    function viewProject(data){
        return $http.get('/projectcontract/listFile',{params:data})
    }
});

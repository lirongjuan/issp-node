var app = angular.module('occupationalServer',[]);
app.factory('occupationalSer',function ($http) {
    return {
        listOcc : listOcc,
        menuPermission:menuPermission,
        deleteOcc:deleteOcc,
        countOcc:countOcc,
        addOcc:addOcc,
        getOcc:getOcc,
        editOcc:editOcc,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/careerplanningcustom/guidePermission/'+data);
    }
    function listOcc(data){
        return $http.get('/careerplanningcustom/list',{params:data})
    }
    function countOcc(){
        return $http.get('/careerplanningcustom/count')
    }

    function deleteOcc(data){
        return $http.get('/careerplanningcustom/delete',{params:data})
    }

    function addOcc(data){
        return $http.post('/careerplanningcustom/add',data)
    }
    function getOcc(data){
        return $http.get('/careerplanningcustom/career',{params:data})
    }
    function editOcc(data){
        return $http.post('/careerplanningcustom/edit',data)
    }
});

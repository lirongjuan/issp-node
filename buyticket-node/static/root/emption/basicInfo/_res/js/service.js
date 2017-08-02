var app = angular.module('basicInfoServer',[]);
app.factory('basicInfoSer',function ($http) {
    return {
        listBasic : listBasic,
        menuPermission:menuPermission,
        deleteBasic:deleteBasic,
        countBasic:countBasic,
        addBasic:addBasic,
        getBasic:getBasic,
        editBasic:editBasic,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/basicinfo/guidePermission/'+data);
    }
    function listBasic(data){
        return $http.get('/basicinfo/list',{params:data})
    }
    function countBasic(){
        return $http.get('/basicinfo/count')
    }
    function deleteBasic(data){
        return $http.get('/basicinfo/delete',{params:data})
    }

    function addBasic(data){
        return $http.post('/basicinfo/add',data)
    }
    function getBasic(data){
        return $http.get('/basicinfo/basic',{params:data})
    }
    function editBasic(data){
        return $http.post('/basicinfo/edit',data)
    }
});

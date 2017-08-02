var app = angular.module('standardServer',[]);
app.factory('standardSer',function ($http) {
    return {
        listStand : listStand,
        menuPermission:menuPermission,
        deleteStand:deleteStand,
        countStand:countStand,
        addStand:addStand,
        getStand:getStand,
        editStand:editStand,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/buyticketstandard/guidePermission/'+data);
    }
    function listStand(data){
        return $http.get('/buyticketstandard/list',{params:data})
    }
    function countStand(){
        return $http.get('/buyticketstandard/count')
    }
    function deleteStand(data){
        return $http.get('/buyticketstandard/delete',{params:data})
    }

    function addStand(data){
        return $http.post('/buyticketstandard/add',data)
    }
    function getStand(data){
        return $http.get('/buyticketstandard/standard',{params:data})
    }
    function editStand(data){
        return $http.post('/buyticketstandard/edit',data)
    }
});

var app = angular.module('capitalServer',[]);
app.factory('capitalSer',function ($http) {
    return {
        listCap : listCap,
        menuPermission:menuPermission,
        deleteCap:deleteCap,
        countCap:countCap,
        getCap:getCap,
        editCap:editCap,
        addCap:addCap,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/moneyready/guidePermission/'+data);
    }
    function listCap(data){
        return $http.get('/moneyready/list',{params:data})
    }
    function countCap(){
        return $http.get('/moneyready/countSum')
    }
    function deleteCap(data){
        return $http.get('/moneyready/delete',{params:data})
    }
    function addCap(data){
        return $http.post('/moneyready/save',data)
    }
    function getCap(data){
        return $http.get('/moneyready/moneyready',{params:data})
    }
    function editCap(data){
        return $http.post('/moneyready/edit',data)
    }

});

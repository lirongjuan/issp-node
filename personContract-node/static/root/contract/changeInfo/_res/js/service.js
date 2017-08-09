var app = angular.module('changeInfoServer',[]);
app.factory('changeInfoSer',function ($http) {
    return {
        listChange : listChange,
        menuPermission:menuPermission,
        countChange:countChange,
        getChange:getChange,
        editChange:editChange,
        deleteChange:deleteChange,

    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/contractchange/guidePermission/'+data);
    }
    function listChange(data){
        return $http.get('/contractchange/maps',{params:data})
    }
    function countChange(){
        return $http.get('/contractchange/getTotal')
    }
    function editChange(data){
        return $http.get('/contractchange/update',{params:data})
    }
    function getChange(data){
        return $http.get('/contractchange/findById',{params:data})
    }
    function deleteChange(data){
        return $http.get('/contractchange/delete',{params:data})
    }

});

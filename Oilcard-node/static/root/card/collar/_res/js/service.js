var app = angular.module('collarServer',[]);
app.factory('collarSer',function ($http) {
    return {
        listCollar : listCollar,
        menuPermission:menuPermission,
        deleteCollar:deleteCollar,
        countCollar:countCollar,
        addCollar:addCollar,
        getCollar:getCollar,
        editCollar:editCollar,
        auditCollar:auditCollar,
        returnCollar:returnCollar,
        getUserAll:getUserAll,
        getAreaAll:getAreaAll,
        GetNo:GetNo,
        
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/receive/guidePermission/'+data)
    }
    function listCollar(data){
        return $http.get('/receive/list',{params:data})
    }
    function countCollar(){
        return $http.get('/receive/count')
    }
    function deleteCollar(data){
        return $http.get('/receive/delete',{params:data})
    }
    function addCollar(data){
        return $http.post('/receive/add',data)
    }
    function getCollar(data){
        return $http.get('/receive/find',{params:data})
    }
    function editCollar(data){
        return $http.post('/receive/edit',data)
    }
    function auditCollar(data){
        return $http.get('/receive/audit',{params:data})
    }
    function returnCollar(data){
       return  $http.get('/receive/return',{params:data})
    }
    function getUserAll() {
        return $http.get('/receive/find/operate')
    }

    function getAreaAll(){
        return $http.get('/receive/find/area')
    }
    function GetNo(){
        return $http.get('/receive/find/oilcard')
    }
});

var app = angular.module('collarServer',[]);
app.factory('collarSer',function ($http) {
    return {
        listCollar : listCollar,
        countCollar:countCollar,
        addCollar:addCollar,
        getCollar:getCollar,
        editCollar:editCollar,
        deleteCollar:deleteCollar,
        getUserAll:getUserAll,
        menuPermission:menuPermission,
        auditCollar:auditCollar,
        LeadCollar:LeadCollar,
        getAreaAll:getAreaAll,
        getgroupAll:getgroupAll,
        allGetNo:allGetNo,
        restCollar:restCollar,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/materialreceive/guidePermission/'+data);
    }
    function listCollar(data) {
        return $http.get('/materialreceive/list',{params:data})
    }
    function countCollar(){
        return $http.get('/materialreceive/count')
    }
    function addCollar(data) {
        return $http.post('/materialreceive/add',data)
    }
    function getCollar(data) {
        return $http.get('/materialreceive/materialreceive',{params:data})
    }
    function editCollar(data) {
        return $http.post('/materialreceive/edit',data)
    }
    function auditCollar(data){
        return $http.post('/materialreceive/audit',data)
    }
    function LeadCollar(data){
        return $http.post('/materialreceive/receiveover',data)
    }
    function  restCollar(data){
        return $http.post('/materialreceive/materialreturn',data)
    }
    function deleteCollar(data) {
        return $http.get('/materialreceive/delete',{params:data})
    }

    function getUserAll() {
        return $http.get('/materialreceive/allGetPerson')
    }

    function getAreaAll(){
        return $http.get('/materialreceive/allArea')
    }
    function getgroupAll(){
        return $http.get('/materialreceive/allOrageDepartment')
    }
    function allGetNo(){
        return $http.get('/materialreceive/allGetNo')
    }

});

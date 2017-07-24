var app = angular.module('yearsServer',[]);
app.factory('yearsSer',function ($http) {
    return {
        listYears:listYears,
        menuPermission:menuPermission,
        deleteYears:deleteYears,
        countYears:countYears,
        addYears:addYears,
        getYears:getYears,
        editYears:editYears,
        aduitYears:aduitYears,
        confirmYears:confirmYears,
        verifyYears:verifyYears,
        getAreaAll:getAreaAll,
        getUserAll:getUserAll,
        getgroupAll:getgroupAll,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/materialinventoryAnnual/guidePermission/'+data);
    }
    function listYears(data){
        return $http.get('/materialinventoryAnnual/list',{params:data})
    }
    function countYears(){
        return $http.get('/materialinventoryAnnual/count')
    }
    function getUserAll() {
        return $http.get('/materialanalyzeAnnual/allGetPerson')
    }
    function getAreaAll(){
        return $http.get('/materialanalyzeAnnual/allArea')
    }
    function getgroupAll(){
        return $http.get('/materialanalyzeAnnual/allOrageDepartment')
    }
    function deleteYears(data){
        return $http.get('/materialinventoryAnnual/delete',{params:data})
    }

    function addYears(data){
        return $http.post('/materialinventoryAnnual/add',data)
    }
    function getYears(data){
        return $http.get('/materialinventoryAnnual/materialinventoryAnnual',{params:data})
    }
    function editYears(data){
        return $http.post('/materialinventoryAnnual/edit',data)
    }
    function aduitYears(data){
        return $http.post('/materialinventoryAnnual/zjbConfirm',data)
    }
    function confirmYears(data){
        return $http.post('/materialinventoryAnnual/operatorStatus',data)
    }
    function verifyYears(data){
        return $http.post('/materialinventoryAnnual/accountModuleConfirm',data)
    }

});

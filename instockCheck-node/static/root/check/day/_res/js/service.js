var app = angular.module('dayServer',[]);
app.factory('daySer',function ($http) {
    return {
        listDay : listDay,
        menuPermission:menuPermission,
        deleteDay:deleteDay,
        countDay:countDay,
        addDay:addDay,
        getDay:getDay,
        editDay:editDay,
        aduitDay:aduitDay,
        confirmDay:confirmDay,
        verifyDay:verifyDay,
        getAreaAll:getAreaAll,
        getUserAll:getUserAll,
        getgroupAll:getgroupAll,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/materialinventoryDaily/guidePermission/'+data);
    }
    function listDay(data){
        return $http.get('/materialinventoryDaily/list',{params:data})
    }
    function countDay(){
        return $http.get('/materialinventoryDaily/count')
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
    function deleteDay(data){
        return $http.get('/materialinventoryDaily/delete',{params:data})
    }

    function addDay(data){
        return $http.post('/materialinventoryDaily/add',data)
    }
    function getDay(data){
        return $http.get('/materialinventoryDaily/materialanalyzeWeekly',{params:data})
    }
    function editDay(data){
        return $http.post('/materialinventoryDaily/edit',data)
    }
    function aduitDay(data){
        return $http.post('/materialinventoryDaily/zjbConfirm',data)
    }
    function confirmDay(data){
        return $http.post('/materialinventoryDaily/operatorStatus',data)
    }
    function verifyDay(data){
        return $http.post('/materialinventoryDaily/accountModuleConfirm',data)
    }

});

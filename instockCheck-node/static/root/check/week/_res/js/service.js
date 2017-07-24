var app = angular.module('weekServer',[]);
app.factory('weekSer',function ($http) {
    return {
        listWeek:listWeek,
        menuPermission:menuPermission,
        deleteWeek:deleteWeek,
        countWeek:countWeek,
        addWeek:addWeek,
        getWeek:getWeek,
        editWeek:editWeek,
        aduitWeek:aduitWeek,
        confirmWeek:confirmWeek,
        verifyWeek:verifyWeek,
        getAreaAll:getAreaAll,
        getUserAll:getUserAll,
        getgroupAll:getgroupAll,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/materialinventoryWeekly/guidePermission/'+data);
    }
    function listWeek(data){
        return $http.get('/materialinventoryWeekly/list',{params:data})
    }
    function countWeek(){
        return $http.get('/materialinventoryWeekly/count')
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
    function deleteWeek(data){
        return $http.get('/materialinventoryWeekly/delete',{params:data})
    }

    function addWeek(data){
        return $http.post('/materialinventoryWeekly/add',data)
    }
    function getWeek(data){
        return $http.get('/materialinventoryWeekly/materialinventoryWeekly',{params:data})
    }
    function editWeek(data){
        return $http.post('/materialinventoryWeekly/edit',data)
    }
    function aduitWeek(data){
        return $http.post('/materialinventoryWeekly/zjbConfirm',data)
    }
    function confirmWeek(data){
        return $http.post('/materialinventoryWeekly/operatorStatus',data)
    }
    function verifyWeek(data){
        return $http.post('/materialinventoryWeekly/accountModuleConfirm',data)
    }

});

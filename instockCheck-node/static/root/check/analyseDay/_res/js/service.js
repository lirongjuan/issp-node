var app = angular.module('analyseDayServer',[]);
app.factory('analyseDaySer',function ($http) {
    return {
        listDay : listDay,
        menuPermission:menuPermission,
        deleteDay:deleteDay,
        countDay:countDay,
        addDay:addDay,
        getDay:getDay,
        editDay:editDay,
        getAreaAll:getAreaAll,
        getUserAll:getUserAll,
        getgroupAll:getgroupAll,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/materialanalyzeDaily/guidePermission/'+data);
    }
    function listDay(data){
        return $http.get('/materialanalyzeDaily/list',{params:data})
    }
    function countDay(){
        return $http.get('/materialanalyzeDaily/count')
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
        return $http.get('/materialanalyzeDaily/delete',{params:data})
    }

    function addDay(data){
        return $http.post('/materialanalyzeDaily/add',data)
    }
    function getDay(data){
        return $http.get('/materialanalyzeDaily/materialanalyzeDaily',{params:data})
    }
    function editDay(data){
        return $http.post('/materialanalyzeDaily/edit',data)
    }

});

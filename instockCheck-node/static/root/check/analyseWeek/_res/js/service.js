var app = angular.module('analyseWeekServer',[]);
app.factory('analyseWeekSer',function ($http) {
    return {
        listWeek : listWeek,
        menuPermission:menuPermission,
        deleteWeek:deleteWeek,
        countWeek:countWeek,
        addWeek:addWeek,
        getWeek:getWeek,
        editWeek:editWeek,
        getAreaAll:getAreaAll,
        getUserAll:getUserAll,
        getgroupAll:getgroupAll,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/materialanalyzeWeekly/guidePermission/'+data);
    }
    function listWeek(data){
        return $http.get('/materialanalyzeWeekly/list',{params:data})
    }
    function countWeek(){
        return $http.get('/materialanalyzeWeekly/count')
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
        return $http.get('/materialanalyzeWeekly/delete',{params:data})
    }

    function addWeek(data){
        return $http.post('/materialanalyzeWeekly/add',data)
    }
    function getWeek(data){
        return $http.get('/materialanalyzeWeekly/materialanalyzeWeekly',{params:data})
    }
    function editWeek(data){
        return $http.post('/materialanalyzeWeekly/edit',data)
    }

});

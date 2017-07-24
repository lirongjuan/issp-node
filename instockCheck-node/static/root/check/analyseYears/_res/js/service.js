var app = angular.module('analyseYearsServer',[]);
app.factory('analyseYearsSer',function ($http) {
    return {
        listYears : listYears,
        menuPermission:menuPermission,
        deleteYears:deleteYears,
        countYears:countYears,
        addYears:addYears,
        getYears:getYears,
        editYears:editYears,
        getAreaAll:getAreaAll,
        getUserAll:getUserAll,
        getgroupAll:getgroupAll,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/materialanalyzeAnnual/guidePermission/'+data);
    }
    function listYears(data){
        return $http.get('/materialanalyzeAnnual/list',{params:data})
    }
    function countYears(){
        return $http.get('/materialanalyzeAnnual/count')
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
        return $http.get('/materialanalyzeAnnual/delete',{params:data})
    }

    function addYears(data){
        return $http.post('/materialanalyzeAnnual/add',data)
    }
    function getYears(data){
        return $http.get('/materialanalyzeAnnual/materialanalyzeAnnual',{params:data})
    }
    function editYears(data){
        return $http.post('/materialanalyzeAnnual/edit',data)
    }

});

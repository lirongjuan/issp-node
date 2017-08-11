var app = angular.module('timesServer',[]);
app.factory('timesSer',function ($http) {
    return {
        listTimes : listTimes,
        menuPermission:menuPermission,
        deleteTimes:deleteTimes,
        countTimes:countTimes,
        addTimes:addTimes,
        getTimes:getTimes,
        editTimes:editTimes,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/workjointimespecification/guidePermission/'+data);
    }
    function listTimes(data){
        return $http.get('/workjointimespecification/list',{params:data})
    }
    function countTimes(){
        return $http.get('/workjointimespecification/count')
    }
    function deleteTimes(data){
        return $http.get('/workjointimespecification/delete',{params:data})
    }
    function addTimes(data){
        return $http.post('/workjointimespecification/add',data)
    }
    function getTimes(data){
        return $http.get('/workjointimespecification/time',{params:data})
    }
    function editTimes(data){
        return $http.post('/workjointimespecification/edit',data)
    }


});

var app = angular.module('recordServer',[]);
app.factory('recordSer',function ($http) {
    return {
        listRecord : listRecord,
        menuPermission:menuPermission,
        deleteRecord:deleteRecord,
        countRecord:countRecord,
        addRecord:addRecord,
        getRecord:getRecord,
        editRecord:editRecord,
        congealRecord:congealRecord,
        thawRecord:thawRecord,
        getUserAll:getUserAll,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/ticketinforecord/guidePermission/'+data);
    }
    function listRecord(data){
        return $http.get('/ticketinforecord/list',{params:data})
    }
    function countRecord(){
        return $http.get('/ticketinforecord/count')
    }
    function deleteRecord(data){
        return $http.get('/ticketinforecord/delete',{params:data})
    }

    function addRecord(data){
        return $http.post('/ticketinforecord/add',data)
    }
    function getRecord(data){
        return $http.get('/ticketinforecord/record',{params:data})
    }
    function editRecord(data){
        return $http.post('/ticketinforecord/edit',data)
    }
    function congealRecord(data){
        return $http.get('/ticketinforecord/congeal',{params:data})
    }
    function thawRecord(data) {
        return $http.get('/ticketinforecord/thaw',{params:data})
    }
    function getUserAll() {
        return $http.get('/buyticketapply/allGetPerson')
    }
});

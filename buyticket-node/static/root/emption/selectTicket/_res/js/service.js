var app = angular.module('selectTicketServer',[]);
app.factory('selectTicketSer',function ($http) {
    return {
        listSelect : listSelect,
        menuPermission:menuPermission,
        deleteSelect:deleteSelect,
        countSelect:countSelect,
        getSelect:getSelect,
        editSelect:editSelect,
        getAreaAll:getAreaAll,
        getUserAll:getUserAll,
        getgroupAll:getgroupAll,
        getCauseAll:getCauseAll,
        getTypeAll:getTypeAll,
        getPatternAll:getPatternAll,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/buyticketrecord/guidePermission/'+data);
    }
    function listSelect(data){
        return $http.get('/buyticketrecord/list',{params:data})
    }
    function countSelect(){
        return $http.get('/buyticketrecord/count')
    }
    function deleteSelect(data){
        return $http.get('/buyticketrecord/delete',{params:data})
    }

    function getSelect(data){
        return $http.get('/buyticketrecord/record',{params:data})
    }
    function editSelect(data){
        return $http.post('/buyticketrecord/edit',data)
    }
    function getAreaAll(){
        return $http.get('/buyticketapply/allArea')
    }
    function getUserAll(){
        return $http.get('/buyticketapply/allGetPerson')
    }
    function getgroupAll(){
        return $http.get('/buyticketapply/allOrageDepartment')
    }
    function getCauseAll(){
        return $http.get('/basicinfo/findticketCause')
    }
    function getTypeAll(){
        return $http.get('/basicinfo/findTicketType')
    }
    function getPatternAll(){
        return $http.get('/basicinfo/findBuyPattern')
    }
});

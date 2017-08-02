var app = angular.module('applicationServer',[]);
app.factory('applicationSer',function ($http) {
    return {
        listApp : listApp,
        menuPermission:menuPermission,
        deleteApp:deleteApp,
        countApp:countApp,
        addApp:addApp,
        getApp:getApp,
        editApp:editApp,
        getAreaAll:getAreaAll,
        getUserAll:getUserAll,
        getgroupAll:getgroupAll,
        getCauseAll:getCauseAll,
        getTypeAll:getTypeAll,
        getPatternAll:getPatternAll,
        auditPlan:auditPlan,
        auditWelf:auditWelf,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/buyticketapply/guidePermission/'+data);
    }
    function listApp(data){
        return $http.get('/buyticketapply/list',{params:data})
    }
    function countApp(){
        return $http.get('/buyticketapply/count')
    }
    function deleteApp(data){
        return $http.get('/buyticketapply/delete',{params:data})
    }

    function addApp(data){
        return $http.post('/buyticketapply/add',data)
    }
    function getApp(data){
        return $http.get('/buyticketapply/apply',{params:data})
    }
    function editApp(data){
        return $http.post('/buyticketapply/edit',data)
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
   function auditPlan(data){
       return $http.post('/buyticketapply/planAuditOpinion',data)
   }
    function auditWelf(data){
        return $http.post('/buyticketapply/welfAuditOpinion',data)
    }
});

var app = angular.module('planServer',[]);
app.factory('planSer',function ($http) {
    return {
        listPlan : listPlan,
        menuPermission:menuPermission,
        deletePlan:deletePlan,
        countPlan:countPlan,
        addPlan:addPlan,
        getPlan:getPlan,
        editPlan:editPlan,
        aduitPlan:aduitPlan,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/individualvisionplan/guidePermission/'+data);
    }
    function listPlan(data){
        return $http.get('/individualvisionplan/list',{params:data})
    }
    function countPlan(){
        return $http.get('/individualvisionplan/count')
    }

    function deletePlan(data){
        return $http.get('/individualvisionplan/delete',{params:data})
    }

    function addPlan(data){
        return $http.post('/individualvisionplan/add',data)
    }
    function getPlan(data){
        return $http.get('/individualvisionplan/plan',{params:data})
    }
    function editPlan(data){
        return $http.post('/individualvisionplan/edit',data)
    }
    function aduitPlan(data){
        return $http.post('/individualvisionplan/audit',data)
    }

});

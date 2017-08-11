var app = angular.module('liabilityServer',[]);
app.factory('liabilitySer',function ($http) {
    return {
        listliab : listliab,
        menuPermission:menuPermission,
        deleteliab:deleteliab,
        countliab:countliab,
        addliab:addliab,
        getliab:getliab,
        editliab:editliab,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/workjoinduty/guidePermission/'+data);
    }
    function listliab(data){
        return $http.get('/workjoinduty/list',{params:data})
    }
    function countliab(){
        return $http.get('/workjoinduty/count')
    }
    function deleteliab(data){
        return $http.get('/workjoinduty/delete',{params:data})
    }
    function addliab(data){
        return $http.post('/workjoinduty/add',data)
    }
    function getliab(data){
        return $http.get('/workjoinduty/duty',{params:data})
    }
    function editliab(data){
        return $http.post('/workjoinduty/edit',data)
    }


});

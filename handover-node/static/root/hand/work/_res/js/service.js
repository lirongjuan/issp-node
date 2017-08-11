var app = angular.module('workServer',[]);
app.factory('workSer',function ($http) {
    return {
        listWork : listWork,
        menuPermission:menuPermission,
        deleteWork:deleteWork,
        countWork:countWork,
        addWork:addWork,
        getWork:getWork,
        editWork:editWork,
        getGroup:getGroup,
        getStation:getStation,
        aduitWork:aduitWork,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/workjoin/guidePermission/'+data);
    }
    function listWork(data){
        return $http.get('/workjoin/list',{params:data})
    }
    function countWork(){
        return $http.get('/workjoin/count')
    }
    function getGroup(){
        return $http.get('/workjoin/findThaw')
    }
    function deleteWork(data){
        return $http.get('/workjoin/delete',{params:data})
    }

    function addWork(data){
        return $http.post('/workjoin/add',data)
    }
    function getWork(data){
        return $http.get('/workjoin/work',{params:data})
    }
    function editWork(data){
        return $http.post('/workjoin/edit',data)
    }
    function getStation(){
        return $http.get('/workjoin/position');
    }
    function aduitWork(data){
        return $http.post('/workjoin/audit',data)
    }

});

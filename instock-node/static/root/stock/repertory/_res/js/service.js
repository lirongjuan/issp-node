var app = angular.module('repertoryServer',[]);
app.factory('repertorySer',function ($http) {
    return {
        listRep : listRep,
        menuPermission:menuPermission,
        deleteRep:deleteRep,
        countRep:countRep,
        addRep:addRep,
        getRep:getRep,
        editRep:editRep,
        getAreaAll:getAreaAll,
        getUserAll:getUserAll,
        getgroupAll:getgroupAll,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/stockwarning/guidePermission/'+data);
    }
    function listRep(data){
        return $http.get('/stockwarning/list',{params:data})
    }
    function countRep(){
        return $http.get('/stockwarning/count')
    }
    function getUserAll() {
        return $http.get('/materialinstock/allGetPerson')
    }

    function getAreaAll(){
        return $http.get('/materialinstock/allArea')
    }
    function getgroupAll(){
        return $http.get('/materialinstock/allOrageDepartment')
    }
    function deleteRep(data){
        return $http.get('/stockwarning/delete',{params:data})
    }

    function addRep(data){
        return $http.post('/stockwarning/add',data)
    }
    function getRep(data){
        return $http.get('/stockwarning/stockwarning',{params:data})
    }
    function editRep(data){
        return $http.post('/stockwarning/edit',data)
    }


});

var app = angular.module('storeServer',[]);
app.factory('storeSer',function ($http) {
    return {
        liststore : liststore,
        countStore:countStore,
        addStore:addStore,
        getStore:getStore,
        editStore:editStore,
        deleteStore:deleteStore,
        getUserAll:getUserAll,
        menuPermission:menuPermission,
        getAreaAll:getAreaAll,
        getgroupAll:getgroupAll,
        viewStore:viewStore,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/materialinstock/guidePermission/'+data);
    }
    function liststore(data) {
        return $http.get('/materialinstock/list',{params:data})
    }
    function countStore(){
        return $http.get('/materialinstock/count')
    }
    function addStore(data) {
        return $http.post('/materialinstock/add',data)
    }
    function getStore(data) {
        return $http.get('/materialinstock/materialinstock',{params:data})
    }
    function editStore(data) {
        return $http.post('/materialinstock/edit',data)
    }
    function deleteStore(data) {
        return $http.get('/materialinstock/delete',{params:data})
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
    function viewStore(data){
        return $http.get('/materialinstock/listFile',{params:data})
    }

});

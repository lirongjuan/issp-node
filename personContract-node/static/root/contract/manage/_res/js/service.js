var app = angular.module('manageServer',[]);
app.factory('manageSer',function ($http) {
    return {
        listManage : listManage,
        menuPermission:menuPermission,
        deleteManage:deleteManage,
        countManage:countManage,
        addManage:addManage,
        getManage:getManage,
        editManage:editManage,
        getTypeAll:getTypeAll,
        getUserAll:getUserAll,
        getNatureAll:getNatureAll,
        viewManage:viewManage,
        addchange:addchange,
        confirmManage:confirmManage,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/contractmanage/guidePermission/'+data);
    }
    function listManage(data){
        return $http.get('/contractmanage/info/maps',{params:data})
    }
    function countManage(){
        return $http.get('/contractmanage/info/getTotal')
    }
    function getUserAll() {
        return $http.get('/materialtransfer/allGetPerson')
    }
    function getTypeAll(){
        return $http.get('/contracttype/getChoice');
    }

    function getNatureAll(){
        return $http.get('/contractnature/getChoice')
    }
    function deleteManage(data){
        return $http.get('/contractmanage/delete',{params:data})
    }

    function addManage(data){
        return $http.post('/contractmanage/save',data)
    }
    function getManage(data){
        return $http.get('/contractmanage/findById',{params:data})
    }
    function editManage(data){
        return $http.get('/contractmanage/info/update',{params:data})
    }
    function viewManage(data){
        return $http.get('/contractmanage/listFile',{params:data})
    }
    function addchange(data){
        return $http.post('/contractmanage/saveChange',data)
    }
    function confirmManage(data){
        return $http.get('/contractmanage/affirm',{params:data})
    }
});

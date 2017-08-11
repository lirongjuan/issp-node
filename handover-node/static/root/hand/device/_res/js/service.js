var app = angular.module('deviceServer',[]);
app.factory('deviceSer',function ($http) {
    return {
        listDevice : listDevice,
        menuPermission:menuPermission,
        deleteDevice:deleteDevice,
        countDevice:countDevice,
        addDevice:addDevice,
        getDevice:getDevice,
        editDevice:editDevice,
        GetNo:GetNo,
        viewDevice:viewDevice,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/devicejoin/guidePermission/'+data);
    }
    function listDevice(data){
        return $http.get('/devicejoin/list',{params:data})
    }
    function countDevice(){
        return $http.get('/devicejoin/count')
    }
    function GetNo(){
        return $http.get('/workjoin/getNum')
    }
    function deleteDevice(data){
        return $http.get('/devicejoin/delete',{params:data})
    }

    function addDevice(data){
        return $http.post('/devicejoin/add',data)
    }
    function getDevice(data){
        return $http.get('/devicejoin/device',{params:data})
    }
    function editDevice(data){
        return $http.post('/devicejoin/edit',data)
    }
    function viewDevice(data){
        return $http.get('/devicejoin/listFile',{params:data})
    }


});

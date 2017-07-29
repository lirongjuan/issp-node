var app = angular.module('deviceServer',[]);
app.factory('deviceSer',function ($http) {
    return {
        menuPermission : menuPermission,
        deviceList : deviceList,
        countDevice : countDevice,
        addDeviceWorkers : addDeviceWorkers,
        findDeviceId : findDeviceId,
        editDispatchDevice : editDispatchDevice,
        deleteDeviceWorkers : deleteDeviceWorkers,
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/devicetype/guidePermission/'+data);
    }
    //分页查询设备类型
    function deviceList(data) {
        return $http.get('/devicetype/list',{
            params: data
        })
    }
  //获取设备总记录数
    function countDevice(){
        return $http.get('/devicetype/count')
    }

    //添加
    function addDeviceWorkers(data){
        return $http.post('/devicetype/add',data)
    }
    //id查询设备类型
    function findDeviceId(data){
        return $http.get('/devicetype/devicetype',{
            params:data
        })
    }
    //盘点_编辑
    function editDispatchDevice(data){
        return $http.post('/devicetype/edit',data)
    }
    //删除
    function deleteDeviceWorkers(data){
        return $http.get('/devicetype/delete',{
            params: data
        })
    }
});

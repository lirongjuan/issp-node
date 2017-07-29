var app = angular.module('carServer',[]);
app.factory('carSer',function ($http) {
    return {
        listCar : listCar,
        countBaseInfo:countBaseInfo,
        addCar:addCar,
        deleteCar:deleteCar,
        editCar:editCar,
        getOneById:getOneById,
        menuPermission:menuPermission,
        actualCar:actualCar
    };
    //列表
    function listCar(data) {
        return $http.get('/listCar/list',{
            params:data
        })
    }
    //分页
    function countBaseInfo(){
        return $http.get('/car/count')
    }
    //添加公司能力
    function addCar(data){
        return $http.post('/addCar/add',data)
    }
    //删除
    function deleteCar(data){
        return $http.get('/deleteCar/delete',{params:data})
    }
    //编辑
    function editCar(data){
        return $http.post('/editCar/edit',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.get('/car/getOneById',{params:data})
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/car/guidePermission/'+data);
    }
    //修改实际车次
    function actualCar(data){
        return $http.get('/actualCar/car',{params:data})
    }
});

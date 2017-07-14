var app = angular.module('carServer',[]);
app.factory('carSer',function ($http) {
    return {
        listcar : listcar,
        menuPermission:menuPermission,
        deleteCar:deleteCar,
        countCar:countCar,
        addCar:addCar,
        getCar:getCar,
        editCar:editCar,
        viewCar:viewCar,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/carrentalagreement/guidePermission/'+data);
    }
    function listcar(data){
        return $http.get('/carrentalagreement/list',{params:data})
    }
    function countCar(){
        return $http.get('/carrentalagreement/count')
    }
    function deleteCar(data){
        return $http.get('/carrentalagreement/delete',{params:data})
    }
    function addCar(data){
        return $http.post('/carrentalagreement/add',data)
    }
    function getCar(data){
        return $http.get('/carrentalagreement/housing',{params:data})
    }
    function editCar(data){
        return $http.post('/carrentalagreement/edit',data)
    }
    function viewCar(data){
        return $http.get('/carrentalagreement/listFile',{params:data})
    }
});

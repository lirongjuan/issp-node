var app = angular.module('houseServer',[]);
app.factory('houseSer',function ($http) {
    return {
        listhouse : listhouse,
        menuPermission:menuPermission,
        deleteHouse:deleteHouse,
        countHouse:countHouse,
        addHouse:addHouse,
        getHouse:getHouse,
        editHouse:editHouse,
        viewHouse:viewHouse,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/housingcontract/guidePermission/'+data);
    }
    function listhouse(data){
        return $http.get('/housingcontract/list',{params:data})
    }
    function countHouse(){
        return $http.get('/housingcontract/count')
    }
    function deleteHouse(data){
        return $http.get('/housingcontract/delete',{params:data})
    }
    function addHouse(data){
        return $http.post('/housingcontract/add',data)
    }
    function getHouse(data){
        return $http.get('/housingcontract/housing',{params:data})
    }
    function editHouse(data){
        return $http.post('/housingcontract/edit',data)
    }
    function viewHouse(data){
        return $http.get('/housingcontract/listFile',{params:data})
    }
});

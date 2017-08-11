var app = angular.module('meansServer',[]);
app.factory('meansSer',function ($http) {
    return {
        listMeans : listMeans,
        menuPermission:menuPermission,
        deleteMeans:deleteMeans,
        countMeans:countMeans,
        addMeans:addMeans,
        getMeans:getMeans,
        editMeans:editMeans,
        GetNo:GetNo,
        viewMeans:viewMeans,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/joininfo/guidePermission/'+data);
    }
    function listMeans(data){
        return $http.get('/joininfo/list',{params:data})
    }
    function countMeans(){
        return $http.get('/joininfo/count')
    }
    function GetNo(){
        return $http.get('/workjoin/getNum')
    }
    function deleteMeans(data){
        return $http.get('/joininfo/delete',{params:data})
    }

    function addMeans(data){
        return $http.post('/joininfo/add',data)
    }
    function getMeans(data){
        return $http.get('/joininfo/info',{params:data})
    }
    function editMeans(data){
        return $http.post('/joininfo/edit',data)
    }
    function viewMeans(data){
        return $http.get('/joininfo/listFile',{params:data})
    }


});

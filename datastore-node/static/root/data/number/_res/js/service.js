var app = angular.module('numberServer',[]);
app.factory('numberSer',function ($http) {
    return {
        listNumber : listNumber,
        countNumber:countNumber,
        deleteNumber:deleteNumber,
        addNumber:addNumber,
        editNumber:editNumber,
        getOneById:getOneById,
        menuPermission:menuPermission,
        viewNumber:viewNumber
    };
    function listNumber(data) {
        return $http.get('/listNumber/list',{
            params:data
        })
    }
    function countNumber(){
        return $http.get('/countNumber/count')
    }
    function deleteNumber(data){
        return $http.get('/deleteNumber/delete',{params:data})
    }
    function addNumber(data){
        return $http.post('/addNumber/add',data)
    }
    function menuPermission(data) {
        return $http.get('/number/guidePermission/'+data);
    }
    function editNumber(data){
        return $http.post('/editNumber/edit',data)
    }
    function getOneById(data) {
        return $http.get('/number/getOneById',{params:data})
    }
    function viewNumber(data){
        return $http.get('/viewNumber/list',{params:data})
    }
});

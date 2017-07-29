var app = angular.module('accountServer',[]);
app.factory('accountSer',function ($http) {
    return {
        listAccount : listAccount,
        countAccount:countAccount,
        deleteAccount:deleteAccount,
        addAccount:addAccount,
        editAccount:editAccount,
        getOneById:getOneById,
        menuPermission:menuPermission,
        viewAccount:viewAccount
    };
    function listAccount(data) {
        return $http.get('/listAccount/list',{
            params:data
        })
    }
    function countAccount(){
        return $http.get('/countAccount/count')
    }
    function deleteAccount(data){
        return $http.get('/deleteAccount/delete',{params:data})
    }
    function addAccount(data){
        return $http.post('/addAccount/add',data)
    }
    function menuPermission(data) {
        return $http.get('/account/guidePermission/'+data);
    }
    function editAccount(data){
        return $http.post('/editAccount/edit',data)
    }
    function getOneById(data) {
        return $http.get('/account/getOneById',{params:data})
    }
    function viewAccount(data){
        return $http.get('/viewAccount/list',{params:data})
    }
});

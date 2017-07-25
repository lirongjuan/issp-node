var app = angular.module('moveServer',[]);
app.factory('moveSer',function ($http) {
    return {
        listMove : listMove,
        menuPermission:menuPermission,
        deleteMove:deleteMove,
        countMove:countMove,
        addMove:addMove,
        getMove:getMove,
        editMove:editMove,
        aduitMove:aduitMove,
        confirmMove:confirmMove,
        verifyMove:verifyMove,
        getAreaAll:getAreaAll,
        getUserAll:getUserAll,
        GetNo:GetNo,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/materialtransfer/guidePermission/'+data);
    }
    function listMove(data){
        return $http.get('/materialtransfer/list',{params:data})
    }
    function countMove(){
        return $http.get('/materialtransfer/count')
    }
    function getUserAll() {
        return $http.get('/materialtransfer/allGetPerson')
    }

    function getAreaAll(){
        return $http.get('/materialtransfer/allArea')
    }
    function GetNo(){
        return $http.get('/materialtransfer/allGetNo')
    }
    function deleteMove(data){
        return $http.get('/materialtransfer/delete',{params:data})
    }

    function addMove(data){
        return $http.post('/materialtransfer/add',data)
    }
    function getMove(data){
        return $http.get('/materialtransfer/materialtransfer',{params:data})
    }
    function editMove(data){
        return $http.post('/materialtransfer/edit',data)
    }
    function aduitMove(data){
        return $http.post('/materialtransfer/pmAudit',data)
    }
    function confirmMove(data){
        return $http.post('/materialtransfer/wealModConfirm',data)
    }
    function verifyMove(data){
        return $http.post('/materialtransfer/wealModAudit',data)
    }

});

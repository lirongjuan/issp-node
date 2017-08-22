var app = angular.module('alleventServer',[]);
app.factory('alleventSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listfather : listfather,
        deleteCap:deleteCap,
        countfather:countfather,
        getCap:getCap,
        editCap:editCap,
        addCap:addCap,
        allCollect:allCollect,
        getAreaAll:getAreaAll,
        handledCollect:handledCollect,
        untreatCollect:untreatCollect,
        overdueCollect:overdueCollect,
        classCollect:classCollect,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/father/guidePermission/'+data);
    }
    function listfather(data){
        return $http.get('/father/list',{params:data})
    }
    function countfather(){
        return $http.get('/father/count')
    }
    function getAreaAll(){
        return $http.get('/father/findArea')
    }
    function deleteCap(data){
        return $http.get('/moneyready/delete',{params:data})
    }
    function addCap(data){
        return $http.post('/moneyready/save',data)
    }
    function getCap(data){
        return $http.get('/moneyready/moneyready',{params:data})
    }
    function editCap(data){
        return $http.post('/moneyready/edit',data)
    }
    function allCollect(data){
        return $http.get('/father/zongCount',{params:data})
    }
    function handledCollect(data){
        return $http.get('/father/haveDealCount',{params:data})
    }
    function untreatCollect(data){
        return $http.get('/father/noDealCount',{params:data})
    }
    function overdueCollect(data){
        return $http.get('/father/passNoDealCount',{params:data})
    }
    function classCollect(data){
        return $http.get('/father/classifyCount',{params:data})
    }
});

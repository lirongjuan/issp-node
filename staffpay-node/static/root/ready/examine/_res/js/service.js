var app = angular.module('examineServer',[]);
app.factory('examineSer',function ($http) {
    return {
        listExamine : listExamine,
        countExamine:countExamine,
        addExamine:addExamine,
        getExamine:getExamine,
        editExamine:editExamine,
        deleteExamine:deleteExamine,
        collectExamine:collectExamine,
        menuPermission:menuPermission
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/moneyready/guidePermission/'+data);
    }
    function listExamine(data) {
        return $http.get('/moneyready/list',{params:data})
    }
    function countExamine(){
        return $http.get('/moneyready/count')
    }
    function addExamine(data) {
        return $http.post('/moneyready/add',data)
    }
    function getExamine(data) {
        return $http.get('/moneyready/money',{params:data})
    }
    function editExamine(data) {
        return $http.post('/moneyready/edit',data)
    }
    function deleteExamine(data) {
        return $http.get('/moneyready/delete',{params:data})
    }

    function collectExamine(data) {
        return $http.get('/moneyready/collect',{params:data})
    }

});

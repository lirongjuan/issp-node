var app = angular.module('conNatureServer',[]);
app.factory('conNatureSer',function ($http) {
    return {
        listNature : listNature,
        countNature:countNature,
        addNature:addNature,
        getNature:getNature,
        editNature:editNature,
        deleteNature:deleteNature,
        congealNature:congealNature,
        thawNature:thawNature,
        menuPermission:menuPermission,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/contractnature/guidePermission/'+data);
    }
    function listNature(data) {
        return $http.get('/contractnature/maps',{params:data})
    }
    function countNature(data) {
        return $http.get('/contractnature/getTotal',{params:data})
    }
    function addNature(data) {
        return $http.post('/contractnature/save',data)
    }
    function getNature(data) {
        return $http.get('/contractnature/findById',{params:data})
    }
    function editNature(data) {
        return $http.post('/contractnature/update',data)
    }
    function deleteNature(data) {
        return $http.get('/contractnature/delete',{params:data})
    }
    function congealNature(data) {
        return $http.get('/contractnature/congeal',{params:data})
    }
    function thawNature(data) {
        return $http.get('/contractnature/thaw',{params:data})
    }

});

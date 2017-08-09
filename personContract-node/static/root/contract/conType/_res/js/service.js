var app = angular.module('conTypeServer',[]);
app.factory('conTypeSer',function ($http) {
    return {
        listType : listType,
        countType:countType,
        addType:addType,
        getType:getType,
        editType:editType,
        deleteType:deleteType,
        congealType:congealType,
        thawType:thawType,
        menuPermission:menuPermission,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/contracttype/guidePermission/'+data);
    }
    function listType(data) {
        return $http.get('/contracttype/maps',{params:data})
    }
    function countType(data) {
        return $http.get('/contracttype/getTotal',{params:data})
    }
    function addType(data) {
        return $http.post('/contracttype/save',data)
    }
    function getType(data) {
        return $http.get('/contracttype/findById',{params:data})
    }
    function editType(data) {
        return $http.post('/contracttype/update',data)
    }
    function deleteType(data) {
        return $http.get('/contracttype/delete',{params:data})
    }
    function congealType(data) {
        return $http.get('/contracttype/congeal',{params:data})
    }
    function thawType(data) {
        return $http.get('/contracttype/thaw',{params:data})
    }

});

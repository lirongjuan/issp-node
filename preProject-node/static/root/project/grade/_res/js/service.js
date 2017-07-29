var app = angular.module('gradeServer',[]);
app.factory('gradeSer',function ($http) {
    return {
        listGrade : listGrade,
        countGrade:countGrade,
        addGrade:addGrade,
        getGrade:getGrade,
        editGrade:editGrade,
        deleteGrade:deleteGrade,
        menuPermission:menuPermission
    };
    function listGrade(data) {
        return $http.get('/listGrade/list',{params:data})
    }
    function countGrade() {
        return $http.get('/countGrade/count')
    }
    function addGrade(data) {
        return $http.post('/addGrade/add',data)
    }
    function getGrade(data) {
        return $http.get('/getGrade/id',{params:data})
    }
    function editGrade(data) {
        return $http.post('/editGrade/edit',data)
    }
    function deleteGrade(data) {
        return $http.get('/deleteGrade/delete',{params:data})
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/grade/guidePermission/'+data);
    }
});

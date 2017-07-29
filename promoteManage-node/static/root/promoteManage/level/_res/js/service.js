var app = angular.module('levelServer',[]);
app.factory('levelSer',function ($http) {
    return {
        levelList : levelList,
        menuPermission : menuPermission,
        countlevel:countlevel,
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/level/guidePermission/'+data);
    }
    //列表
    function levelList(data) {
        return $http.get('/level/list',{
            params: data
        })
    }
    //分页总条数
    function countlevel(data){
        return $http.get('/level/count',{params:data})
    }
});

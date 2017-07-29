var app = angular.module('classifyServer',[]);
app.factory('classifySer',function ($http) {
    return {
        menuPermission : menuPermission,
        addclassify:addclassify,
        editclassify:editclassify,
        findTypeName:findTypeName
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/classify/guidePermission/'+data);
    }
    //添加
    function addclassify(data){
        return $http.post('/classify/add',data)
    }

    //编辑
    function editclassify(data){
        return $http.post('/classify/edit',data)
    }
    //根据父节点查询
    function findTypeName(data){
        return $http.get('/classify/findTypeName',{
            params:data
        })
    }
});

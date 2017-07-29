var app = angular.module('otherServer',[]);
app.factory('otherSer',function ($http) {
    return {
        listOther : listOther,
        countBaseInfo:countBaseInfo,
        addOther:addOther,
        deleteOther:deleteOther,
        editOther:editOther,
        getOneById:getOneById,
        menuPermission:menuPermission,
    };
    //列表
    function listOther(data) {
        return $http.get('/listOther/list',{
            params:data
        })
    }
    //分页
    function countBaseInfo(){
        return $http.get('/other/count')
    }
    //添加公司能力
    function addOther(data){
        return $http.post('/addOther/add',data)
    }
    //删除
    function deleteOther(data){
        return $http.get('/deleteOther/delete',{params:data})
    }
    //编辑
    function editOther(data){
        return $http.post('/editOther/edit',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.get('/other/getOneById',{params:data})
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/other/guidePermission/'+data);
    }
});

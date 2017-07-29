var app = angular.module('designServer',[]);
app.factory('designSer',function ($http) {
    return {
        designList : designList,
        menuPermission : menuPermission,
        adddesign:adddesign,
        editdesign:editdesign,
        finddesignId:finddesignId,
        countdesign:countdesign,
        deletedesign:deletedesign,
        getClass:getClass,
        getAllDirections:getAllDirections,
        allSkillLevels:allSkillLevels,
        getSystem:getSystem
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/design/guidePermission/'+data);
    }
    //列表
    function designList(data) {
        return $http.get('/design/list',{
            params: data
        })
    }

    //添加
    function adddesign(data){
        return $http.post('/design/add',data)
    }

    //编辑
    function editdesign(data){
        return $http.post('/design/edit',data)
    }
    //id查询
    function finddesignId(data){
        return $http.get('/design/getOneById',{
            params:data
        })
    }
    //分页总条数
    function countdesign(data){
        return $http.get('/design/count',{params:data})
    }
    //删除
    function deletedesign(data){
        return $http.get('/design/delete',{
            params: data

        })
    }
    //获取 查找所有分类
    function getClass(){
        return $http.get('/design/getClass')
    }
    //获取 查找分类对应的所有管理方向
    function getAllDirections(data){
        return $http.get('/design/getAllDirections',{params:data})
    };
    //获取 查找分类和管理方向对应的所有技能等级
    function allSkillLevels(data){
        return $http.get('/design/allSkillLevels',{params:data})
    }
    //获取 查找所有体系
    function getSystem(){
        return $http.get('/design/getSystem')
    }
});

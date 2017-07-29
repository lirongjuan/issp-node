var app = angular.module('gradelevelServer',[]);
app.factory('gradelevelSer',function ($http) {
    return {
        gradelevelList : gradelevelList,
        menuPermission : menuPermission,
        addgradelevel:addgradelevel,
        editgradelevel:editgradelevel,
        findgradelevelId:findgradelevelId,
        countgradelevel:countgradelevel,
        deletegradelevel:deletegradelevel,
        getClass:getClass,
        getAllDirections:getAllDirections,
        allSkillLevels:allSkillLevels,
        getSystem:getSystem
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/gradelevel/guidePermission/'+data);
    }
    //列表
    function gradelevelList(data) {
        return $http.get('/gradelevel/list',{
            params: data
        })
    }

    //添加
    function addgradelevel(data){
        return $http.post('/gradelevel/add',data)
    }

    //编辑
    function editgradelevel(data){
        return $http.post('/gradelevel/edit',data)
    }
    //id查询
    function findgradelevelId(data){
        return $http.get('/gradelevel/getOneById',{
            params:data
        })
    }
    //分页总条数
    function countgradelevel(data){
        return $http.get('/gradelevel/count',{params:data})
    }
    //删除
    function deletegradelevel(data){
        return $http.get('/gradelevel/delete',{
            params: data

        })
    }
    //获取 查找所有分类
    function getClass(){
        return $http.get('/gradelevel/getClass')
    }
    //获取 查找分类对应的所有管理方向
    function getAllDirections(data){
        return $http.get('/gradelevel/getAllDirections',{params:data})
    };
    //获取 查找分类和管理方向对应的所有技能等级
    function allSkillLevels(data){
        return $http.get('/gradelevel/allSkillLevels',{params:data})
    }
    //获取 查找所有体系
    function getSystem(){
        return $http.get('/gradelevel/getSystem')
    }
});

var app = angular.module('cooperationServer',[]);
app.factory('cooperationSer',function ($http) {
    return {
        listAbilityCooperation : listAbilityCooperation,
        countCooperation:countCooperation,
        deleteCooperationSelf:deleteCooperationSelf,
        addCooperationAbility:addCooperationAbility,
        editCooperationAbility:editCooperationAbility,
        editRelation:editRelation,
        getThreeById:getThreeById,
        menuPermission:menuPermission,
        allCompanyName:allCompanyName,
        viewCompany:viewCompany,
    };
    //列表
    function  listAbilityCooperation(data) {
        return $http.get('/ability/listAbilityCooperation/listCoop',{
            params:data
        })
    }
    //分页
    function countCooperation(data){
        return $http.get('/countCooperation/count',{
            params:data
        })
    }
    //删除
    function deleteCooperationSelf(data){
        return $http.post('/ability/deleteCooperationSelf/delete',data)
    }
    //添加能力
    function addCooperationAbility(data){
        return $http.post('/ability/addCooperationAbility/add',data)
    }
    //编辑
    function editCooperationAbility(data){
        return $http.post('/ability/editCooperationAbility/edit',data)
    }
    function editRelation(data){
        return $http.post('/ability/editRelation/editRel',data)
    }
    //id编辑
    function getThreeById(data) {
        return $http.post('/ability/getThreeById',data)
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/cooperation/guidePermission/'+data);
    }
    //获取所有公司名
    function allCompanyName(){
        return $http.get('/allCooperationName/company')
    }
    //附件列表
    function viewCompany(data){
        return $http.get('/viewCooperation/listFile',{params:data})
    }
});

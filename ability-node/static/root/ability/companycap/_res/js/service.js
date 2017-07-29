var app = angular.module('companycapServer',[]);
app.factory('companycapSer',function ($http) {
    return {
        listAbilityCompanyCap : listAbilityCompanyCap,
        countBaseInfo:countBaseInfo,
        addCompanyAbility:addCompanyAbility,
        deleteCompanyAbility:deleteCompanyAbility,
        editCompanyAbility:editCompanyAbility,
        getOneById:getOneById,
        menuPermission:menuPermission,
        allCompanyName:allCompanyName,
        viewCompany:viewCompany,
    };
    //列表
    function listAbilityCompanyCap(data) {
        return $http.get('/ability/abilitycompanycap/listAbilityCompanyCap',{
            params:data
        })
    }
    //分页
    function countBaseInfo(data){
        return $http.get('/abilitycompanycap/count',{
            params:data
        })
    }
    //添加公司能力
    function addCompanyAbility(data){
        return $http.post('/ability/addCompanyAbility/add',data)
    }
    //删除
    function deleteCompanyAbility(data){
        return $http.post('/ability/deleteCompanyAbility/delete',data)
    }
    //编辑
    function editCompanyAbility(data){
        return $http.post('/ability/editCompanyAbility/edit',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/ability/getOneById',data)
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/companyCap/guidePermission/'+data);
    }
    //获取所有公司名
    function allCompanyName(){
        return $http.get('/allCompanyName/company')
    }
    //附件列表
    function viewCompany(data){
        return $http.get('/viewCompany/listFile',{params:data})
    }
});

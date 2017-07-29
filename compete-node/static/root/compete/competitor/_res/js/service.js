var app = angular.module('competitorServer',[]);
app.factory('competitorSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listAbilityCompanyCap : listAbilityCompanyCap,
        countBaseInfo:countBaseInfo,
        addCompanyAbility:addCompanyAbility,
        deleteCompanyAbility:deleteCompanyAbility,
        editCompanyAbility:editCompanyAbility,
        getOneById:getOneById,
        searchCompanyAbility:searchCompanyAbility,
        competitorOrganizeAdd:organizeAdd,
        putcompetitorEdit:putcompetitorEdit,
        viewSigning:viewSigning
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/competetitor/guidePermission/'+data);
    }
    //列表
    function listAbilityCompanyCap(data) {
        return $http.get('/compete/competecompetitor/listCompetecompetitor',{
            params:data
        })
    }
    //分页
    function countBaseInfo(){
        return $http.get('/competeCompetitor/count')
    }
    //添加公司能力
    function addCompanyAbility(data){
        return $http.post('/compete/competitor/add',data)
    }
    //删除
    function deleteCompanyAbility(data){
        return $http.post('/compete/deleteCompanyCompete/delete',data)
    }
    //编辑
    function editCompanyAbility(data){
        return $http.post('/compete/editCompanyCompete/edit',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/compete/getOneById',data)
    }
    //搜索
    function searchCompanyAbility(data) {
        return $http.post('/compete/searchCompanyCompete',data)
    }
    //获取组织结构信息
    function organizeAdd(data){
        return $http.post('/compete/organize',data)
    }
    function putcompetitorEdit(data){
        return $http.post('/compete/CompetitorEdit/edit',data)
    }
    //附件列表
    function viewSigning(data){
        return $http.get('/compete/listFile',{params:data})
    }
});

var app = angular.module('emailServer',[]);
app.factory('emailSer',function ($http) {
    return {
        listAbilityEmail : listAbilityEmail,
        countEmail:countEmail,
        congealEmail:congealEmail,
        thawEmail:thawEmail,
        deleteEmail:deleteEmail,
        addEmail:addEmail,
        listNameType:listNameType,
        editEmail:editEmail,
        getFourById:getFourById,
        ectSummaryCompany:ectSummaryCompany,
        getCompanyNames:getCompanyNames,
        ectSummaryPerson:ectSummaryPerson,
        getPersonNames:getPersonNames,
        ectSummaryCooperation:ectSummaryCooperation,
        getCooperationNames:getCooperationNames,
        menuPermission:menuPermission,
    };
    //列表
    function  listAbilityEmail(data) {
        return $http.get('/ability/listAbilityEmail/listEmail',{
            params:data
        })
    }
    //分页
    function countEmail(){
        return $http.get('/countEmail/count')
    }
    //冻结
    function congealEmail(data){
        return $http.post('/ability/congealEmail/congeal',data)
    }
    //解冻
    function thawEmail(data){
        return $http.post('/ability/thawEmail/thaw',data)
    }
    //删除
    function deleteEmail(data){
        return $http.post('/ability/deleteEmail/delete',data)
    }
    //添加能力
    function addEmail(data){
        return $http.post('/ability/addEmail/add',data)
    }
    //公司名或姓名
    function listNameType(data) {
        return $http.get('/ability/listNameType/type',{params:data})
    }
    //编辑
    function editEmail(data){
        return $http.post('/ability/editEmail/edit',data)
    }
    //id编辑
    function getFourById(data) {
        return $http.post('/ability/getFourById',data)
    }
    //汇总
    function ectSummaryCompany(data) {
        return $http.post('/ability/ectSummaryCompany',data)
    }
    //汇总名称
    function getCompanyNames() {
        return $http.get('/ability/getCompanyNames')
    }
    //汇总个人
    function ectSummaryPerson(data) {
        return $http.post('/ability/ectSummaryPerson',data)
    }
    //汇总个人名称
    function getPersonNames() {
        return $http.get('/ability/getPersonNames')
    }
    //汇总合作
    function ectSummaryCooperation(data) {
        return $http.post('/ability/ectSummaryCooperation',data)
    }
    //汇总合作名称
    function getCooperationNames() {
        return $http.get('/ability/getCooperationNames')
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/email/guidePermission/'+data);
    }
});

var app = angular.module('spendServer',[]);
app.factory('spendSer',function ($http) {
    return {
        menuPermission : menuPermission,
        listSpend : listSpend,
        getYear:getYear,
        addSpend:addSpend,
        editSpend:editSpend,
        findSpendId:findSpendId,
        countSpend:countSpend,
        deleteSpend:deleteSpend,
        areasSummary:areasSummary,
        getArea:getArea,
        teamSummary:teamSummary,
        getTeam:getTeam,
        categorySummary:categorySummary,
        projectSummary:projectSummary,
        getProject:getProject

    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/managefee/guidePermission/'+data);
    }
    //列表
    function listSpend(data) {
        return $http.get('/managefee/list',{
            params: data
        })
    }
    //获取所有年份
    function getYear(){
        return $http.get('/managefee/listYear')
    }
    //添加
    function addSpend(data){
        return $http.post('/managefee/add',data)
    }

    //编辑
    function editSpend(data){
        return $http.post('/managefee/edit',data)
    }
    //id查询
    function findSpendId(data){
        return $http.get('/managefee/getOneById',{
            params:data
        })
    }
    //分页总条数
    function countSpend(){
        return $http.get('/managefee/count')
    }
    //删除
    function deleteSpend(data){
        return $http.get('/managefee/delete',{
            params: data
        })
    }
    //地区汇总
    function areasSummary(data) {
        console.log(data);
        return $http.post('/managefee/ctArea',data)
    }
    //获取合同签订与立项汇总所有地区
    function getArea(){
        return $http.get('/managefee/listArea')
    }
    //项目组汇总
    function teamSummary(data) {
        return $http.post('/managefee/ctGroup',data)
    }
    //获取所有汇总项目组
    function getTeam(){
        return $http.get('/managefee/listGroup')
    }
    //类别汇总
    function categorySummary(data) {
        return $http.post('/managefee/ctType',data)
    }
    //项目汇总
    function projectSummary(data) {
        return $http.post('/managefee/ctProject',data)
    }
    //获取所有汇总项目
    function getProject(){
        return $http.get('/managefee/listProject')
    }

});

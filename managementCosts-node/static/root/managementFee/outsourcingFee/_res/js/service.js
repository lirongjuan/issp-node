var app = angular.module('outsourcingServer',[]);
app.factory('outsourcingSer',function ($http) {
    return {
        menuPermission : menuPermission,
        listOutsourcing : listOutsourcing,
        getOutsourcingYear:getOutsourcingYear,
        addOutsourcing:addOutsourcing,
        editOutsourcing:editOutsourcing,
        findOutsourcingId:findOutsourcingId,
        countOutsourcing:countOutsourcing,
        deleteOutsourcing:deleteOutsourcing,
        areasSummary:areasSummary,
        getArea:getArea,
        teamSummary:teamSummary,
        getTeam:getTeam,
        categorySummary:categorySummary,
        projectSummary:projectSummary,
        getOutProject:getOutProject

    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/outfee/guidePermission/'+data);
    }
    //列表
    function listOutsourcing(data) {
        return $http.get('/outfee/list',{
            params: data

        })
    }
    //获取所有年份
    function getOutsourcingYear(){
        return $http.get('/outfee/listYear')
    }
    //添加
    function addOutsourcing(data){
        return $http.post('/outfee/add',data)
    }

    //编辑
    function editOutsourcing(data){
        return $http.post('/outfee/edit',data)
    }
    //id查询
    function findOutsourcingId(data){
        return $http.get('/outfee/getOneById',{
            params:data
        })
    }
    //分页总条数
    function countOutsourcing(){
        return $http.get('/outfee/count')
    }
    //删除
    function deleteOutsourcing(data){
        return $http.get('/outfee/delete',{
            params: data
        })
    }
    //地区汇总
    function areasSummary(data) {
        return $http.post('/outfee/ctArea',data)
    }
    //获取合同签订与立项汇总所有地区
    function getArea(){
        return $http.get('/outfee/listArea')
    }
    //项目组汇总
    function teamSummary(data) {
        return $http.post('/outfee/ctGroup',data)
    }
    //获取所有汇总项目组
    function getTeam(){
        return $http.get('/outfee/listGroup')
    }
    //类别汇总
    function categorySummary(data) {
        return $http.post('/outfee/ctType',data)
    }
    //项目汇总
    function projectSummary(data) {
        return $http.post('/outfee/ctProject',data)
    }
    //获取所有汇总项目
    function getOutProject(){
        return $http.get('/outfee/listProject')
    }

});

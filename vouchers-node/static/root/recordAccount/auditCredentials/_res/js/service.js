var app = angular.module('auditCredentialsServer',[]);
app.factory('credentialsSer',function ($http) {
    return {
        menuPermission : menuPermission,
        listCredentials : listCredentials,
        countCredentials:countCredentials,
        findVoucherId:findVoucherId,
        postingCredentials:postingCredentials,
        antiCredentials:antiCredentials,
        subjectSummary:subjectSummary,
        LevelOne:LevelOne,
        LevelTwo:LevelTwo,
        LevelThree:LevelThree,
        areasSummary:areasSummary,
        getArea:getArea,
        teamSummary:teamSummary,
        getTeam:getTeam,
        projectSummary:projectSummary,
        getProject:getProject

    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/vouchergenerate/guidePermission/'+data);
    }
    //列表
    function listCredentials(data) {
        return $http.get('/vouchergenerate/listAudited',{
            params: data

        })
    }
    //分页总条数
    function countCredentials(){
        return $http.get('/vouchergenerate/countAudited')
    }
    //id查询
    function findVoucherId(data){
        return $http.get('/vouchergenerate/getOne',{
            params:data
        })
    }
    //过账
    function postingCredentials(data){
        return $http.post('/vouchergenerate/posting',data)
    }
    //反审核
    function antiCredentials(data){
        return $http.get('/vouchergenerate/antiAudit',{
            params: data
        })
    }
    //科目汇总
    function subjectSummary(data) {
        return $http.post('/vouchergenerate/collectSub',data)
    }
    //获取所有一级科目
    function LevelOne(){
        return $http.get('/vouchergenerate/listFirstSubject')
    }
    //获取所有二级科目
    function LevelTwo(data){
        return $http.get('/vouchergenerate/listSubByFirst',{params:data})
    }
    //获取所有三级科目
    function LevelThree(data){
        return $http.get('/vouchergenerate/listTubByFirst',{params:data})
    }
    //地区汇总
    function areasSummary(data) {
        return $http.post('/vouchergenerate/collectArea',data)
    }
    //获取所有地区
    function getArea(){
        return $http.get('/vouchergenerate/listArea')
    }
    //项目组汇总
    function teamSummary(data) {
        return $http.post('/vouchergenerate/collectGroup',data)
    }
    //获取所有项目组
    function getTeam(){
        return $http.get('/vouchergenerate/listGroup')
    }
    //项目名称汇总
    function projectSummary(data) {
        return $http.post('/vouchergenerate/collectPname',data)
    }
    //获取所有项目名称
    function getProject(){
        return $http.get('/vouchergenerate/listProject')
    }

});

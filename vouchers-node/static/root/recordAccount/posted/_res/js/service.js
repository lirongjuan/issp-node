var app = angular.module('postedServer',[]);
app.factory('postedSer',function ($http) {
    return {
        menuPermission : menuPermission,
        listChecked : listChecked,
        countChecked:countChecked,
        findVoucherId:findVoucherId,
        antiPosting:antiPosting,
        billCheck:billCheck,
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
    function listChecked(data) {
        return $http.get('/vouchergenerate/listChecked',{
            params: data

        })
    }
    //分页总条数
    function countChecked(){
        return $http.get('/vouchergenerate/countChecked')
    }
    //id查询
    function findVoucherId(data){
        return $http.get('/vouchergenerate/getOne',{
            params:data
        })
    }

    //反过账
    function antiPosting(data){
        return $http.get('/vouchergenerate/antiPosting',{
            params: data
        })
    }
    //结账
    function billCheck(data){
        return $http.post('/vouchergenerate/checkAccount',data)
    }
    //科目汇总
    function subjectSummary(data) {
        return $http.post('/vouchergenerate/ctTransSub',data)
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
        return $http.post('/vouchergenerate/ctTransArea',data)
    }
    //获取所有地区
    function getArea(){
        return $http.get('/vouchergenerate/listArea')
    }
    //项目组汇总
    function teamSummary(data) {
        return $http.post('/vouchergenerate/ctTransGroup',data)
    }
    //获取所有项目组
    function getTeam(){
        return $http.get('/vouchergenerate/listGroup')
    }
    //项目名称汇总
    function projectSummary(data) {
        return $http.post('/vouchergenerate/ctTransPname',data)
    }
    //获取所有项目名称
    function getProject(){
        return $http.get('/vouchergenerate/listProject')
    }

});

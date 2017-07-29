var app = angular.module('voucherRecordsServer',[]);
app.factory('voucherRecordsSer',function ($http) {
    return {
        menuPermission : menuPermission,
        listVoucherRecords : listVoucherRecords,
        countVoucherRecords:countVoucherRecords,
        subjectSummary:subjectSummary,
        LevelOne:LevelOne,
        LevelTwo:LevelTwo,
        LevelThree:LevelThree,
        areasSummary:areasSummary,
        getArea:getArea,
        teamSummary:teamSummary,
        getTeam:getTeam,
        projectSummary:projectSummary,
        getProject:getProject,
        viewFiles:viewFiles

    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/vouchergenerate/guidePermission/'+data);
    }
    //列表
    function listVoucherRecords(data) {
        return $http.get('/vouchergenerate/listRecord',{
            params: data

        })
    }
    //分页总条数
    function countVoucherRecords(){
        return $http.get('/vouchergenerate/countRecord')
    }
    //科目汇总
    function subjectSummary(data) {
        return $http.post('/vouchergenerate/ctReSub',data)
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
        return $http.post('/vouchergenerate/ctReArea',data)
    }
    //获取所有地区
    function getArea(){
        return $http.get('/vouchergenerate/listArea')
    }
    //项目组汇总
    function teamSummary(data) {
        return $http.post('/vouchergenerate/ctReGroup',data)
    }
    //获取所有项目组
    function getTeam(){
        return $http.get('/vouchergenerate/listGroup')
    }
    //项目名称汇总
    function projectSummary(data) {
        return $http.post('/vouchergenerate/ctRePname',data)
    }
    //获取所有项目名称
    function getProject(){
        return $http.get('/vouchergenerate/listProject')
    }
    //附件列表
    function viewFiles(data){
        return $http.get('/vouchergenerate/listFile',{params:data})
    }
});

var app = angular.module('billRecordsServer',[]);
app.factory('billRecordsSer',function ($http) {
    return {
        menuPermission : menuPermission,
        listBillRecords : listBillRecords,
        countBillRecords:countBillRecords,
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
    function listBillRecords(data) {
        return $http.get('/vouchergenerate/listCkRecord',{
            params: data

        })
    }
    //分页总条数
    function countBillRecords(){
        return $http.get('/vouchergenerate/countCkRecord')
    }
    //科目汇总
    function subjectSummary(data) {
        return $http.post('/vouchergenerate/ctCkSub',data)
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
        return $http.post('/vouchergenerate/ctCkArea',data)
    }
    //获取所有地区
    function getArea(){
        return $http.get('/vouchergenerate/listArea')
    }
    //项目组汇总
    function teamSummary(data) {
        return $http.post('/vouchergenerate/ctCkGroup',data)
    }
    //获取所有项目组
    function getTeam(){
        return $http.get('/vouchergenerate/listGroup')
    }
    //项目名称汇总
    function projectSummary(data) {
        return $http.post('/vouchergenerate/ctCkPname',data)
    }
    //获取所有项目名称
    function getProject(){
        return $http.get('/vouchergenerate/listProject')
    }

});

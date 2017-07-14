var app = angular.module('summaryServer',[]);
app.factory('summarySer',function ($http) {
    return {     
        departmentList:departmentList,//部门列表查询
        departmentSummary:departmentSummary,//部门汇总
        areasList:areasList,//地区列表查询
        departmentAnalyze:departmentAnalyze,//部门分析
        oneSummary:oneSummary,//个人汇总
        areasAnalyze : areasAnalyze,//地区分析
        oneAnalyze:oneAnalyze,//个人分析
        userList:userList,//用户列表查询
        areasSummary:areasSummary,//地区汇总
        summaryPermission:summaryPermission
    };
    //部门列表查询
    function  departmentList(data) {
        return $http.get('/departmentList/departmentList',{
            params:data
        })
    }
    //部门汇总
    function  departmentSummary(data) {
        return $http.get('/departmentSummary/departmentSummary',{
            params:data
        })
    }
    //地区列表查询
    function  areasList(data) {
        return $http.get('/areasList/areasList',{
            params:data
        })
    }
    //部门分析
    function  departmentAnalyze(data) {
        return $http.get('/departmentAnalyze/departmentAnalyze',{
            params:data
        })
    }
    //个人汇总
    function  oneSummary(data) {
        return $http.get('/oneSummary/one',{
            params:data
        })
    }
    //地区分析
    function  areasAnalyze(data) {
        return $http.get('/areasAnalyze/areas',{
            params:data
        })
    }
    //个人分析
    function  oneAnalyze(data) {
        return $http.get('/oneAnalyze/oneAnalyze',{
            params:data
        })
    }
    //用户列表查询
    function  userList(data) {
        return $http.get('/userList/userList',{
            params:data
        })
    }
    //地区汇总
    function areasSummary(data) {
        return $http.get('/areasSummary/areasSummary',{
            params:data
        })
    }
    //菜单权限
    function summaryPermission(data) {
        return $http.get('/summaryPermission/guidePermission/'+data);
    }
});

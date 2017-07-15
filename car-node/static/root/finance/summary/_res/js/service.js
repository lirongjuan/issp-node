var app = angular.module('summaryServer',[]);
app.factory('summarySer',function ($http) {
    return {
        listWeek : listWeek,
        listMonth : listMonth,
        listArea:listArea,
        areaAna:areaAna,
        listProject:listProject,
        proAnalysis:proAnalysis,
        listDriver:listDriver,
        driAnalysis:driAnalysis,
        menuPermission:menuPermission,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/finance/guidePermission/'+data);
    }
    function listWeek(data) {
        return $http.get('/listWeek',{params:data})
    }
    function listMonth(data) {
        return $http.get('/listMonth',{params:data})
    }
    function listArea(data) {
        return $http.get('/listArea',{params:data})
    }
    function areaAna(data) {
        return $http.get('/areaAna',{params:data})
    }
    function listProject(data) {
        return $http.get('/listProject',{params:data})
    }
    function proAnalysis(data) {
        return $http.get('/proAnalysis',{params:data})
    }
    function listDriver(data) {
        return $http.get('/listDriver',{params:data})
    }
    function driAnalysis(data) {
        return $http.get('/driAnalysis',{params:data})
    }
});

var app = angular.module('summaryServer',[]);
app.factory('summarySer',function ($http) {
    return {
        listProgress : listProgress,
        countProgress : countProgress,
        addProgress:addProgress,
        getProgress:getProgress,
        editProgress:editProgress,
        deleteProgress:deleteProgress,
        menuPermission:menuPermission,
        viewSummary:viewSummary,
        summarylistInfo:summarylistInfo,
    };

    //菜单权限
    function menuPermission(data) {
        return $http.get('/qualificationscollect/guidePermission/'+data);
    }
    //附件列表
    function viewSummary(data){
        return $http.get('/qualificationscollect/listFile',{params:data})
    }
    //根据条件来查询
    function summarylistInfo(data){
        return $http.get('/qualificationscollect/findByFilter',{params:data})
    }

    function listProgress(data) {
        return $http.get('/listProgress',{params:data})
    }
    function countProgress() {
        return $http.get('/countProgress')
    }
    function addProgress(data) {
        return $http.post('/addProgress',data)
    }
    function getProgress(data) {
        return $http.get('/getProgress',{params:data})
    }
    function editProgress(data) {
        return $http.post('/editProgress',data)
    }
    function deleteProgress(data) {
        return $http.get('/deleteProgress',{params:data})
    }
});

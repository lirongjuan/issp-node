var app = angular.module('emailServer',[]);
app.factory('emailSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listSummary : listSummary,
        countSummary:countSummary,
        congealSummary:congealSummary,
        thawSummary:thawSummary,
        deleteSummary:deleteSummary,
        addSummery:addSummery,
        editEmail:editEmail,
        getFourById:getFourById,
        allProject:allProject,
        summarize:summarize
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/summary/guidePermission/'+data);
    }
    //列表
    function  listSummary(data) {
        return $http.get('/marketActivity/summary/list',{
            params:data
        })
    }
    //分页
    function countSummary(){
        return $http.get('/marketActivity/summary/count')
    }
   //冻结
    function congealSummary(data){
        return $http.post('/marketActivity/congealSummary/congeal',data)
    }
    //解冻
    function thawSummary(data){
        return $http.post('/marketActivity/thawEmail/thaw',data)
    }
    //删除
    function deleteSummary(data){
        return $http.post('/marketActivity/summary/delete',data)
    }
    //添加
    function addSummery(data){
        return $http.post('/marketActivity/addSummery/add',data)
    }
    //编辑
    function editEmail(data){
        return $http.post('/marketActivity/summery/Edit',data)
    }
    //id编辑
    function getFourById(data) {
        return $http.post('/marketActivity/summary/EditId',data)
    }
    //获取所有项目组
    function allProject(data){
        return $http.get('/marketActivity/summary/allProject',{
            params:data
        })
    }
    //汇总
    function summarize(data) {
        return $http.post('/marketActivity/summarize',data)
    }
});

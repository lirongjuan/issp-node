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
        allgetLender:allgetLender,
        collectLender:collectLender
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/collectemail/guidePermission/'+data);
    }
    //列表
    function  listSummary(data) {
        return $http.get('/projectmeasure/measuresummary/list',{
            params:data
        })
    }
    //分页
    function countSummary(){
        return $http.get('/projectmeasure/measuresummary/count')
    }
   //冻结
    function congealSummary(data){
        return $http.post('/projectmeasure/measuresummary/congeal',data)
    }
    //解冻
    function thawSummary(data){
        return $http.post('/projectmeasure/measuresummary/thaw',data)
    }
   //删除
    function deleteSummary(data){
        return $http.post('/projectmeasure/measuresummary/delete',data)
    }
    //添加
    function addSummery(data){
        return $http.post('/projectmeasure/measuresummary/add',data)
    }
    //编辑
    function editEmail(data){
        return $http.post('/projectmeasure/measuresummary/edit',data)
    }
    //id编辑
    function getFourById(data) {
        return $http.post('/projectmeasure/measuresummary/getOneById',data)
    }
    //獲取所有地區  
    function allgetLender() {
        return $http.get('/projectmeasure/measuresummary/allArea')
    }
    //匯總
    function collectLender(data){
        return $http.post('/projectmeasure/measuresummary/collect',data)
    }
});

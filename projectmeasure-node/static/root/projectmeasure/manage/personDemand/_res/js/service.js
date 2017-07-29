var app = angular.module('marketserveSer',[]);
app.factory('marketserveSer',function ($http) {
    return {
        menuPermission : menuPermission,
        listMarketserve : listMarketserve,
        countBaseInfo:countBaseInfo,
        addMarketserveapply:addMarketserveapply,
        getOneById:getOneById,
        marketserveapplyEdit:marketserveapplyEdit,
        marketserveapplyDel:marketserveapplyDel,
        AllProjectNames:AllProjectNames
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/personDemand/guidePermission/'+data);
    }
    //列表
    function listMarketserve(data) {
        return $http.get('/projectmeasure/personDemand/list',{
            params:data
        })
    }
    //分页
    function countBaseInfo(){
        return $http.get('/projectmeasure/personDemand/count')
    }
    //添加
    function addMarketserveapply(data){
        return $http.post('/projectmeasure/personDemand/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/projectmeasure/personDemand/getOneById',data)
    }
    //编辑
    function marketserveapplyEdit(data){
        return $http.post('/projectmeasure/personDemand/edit',data)
    }
    //删除
    function marketserveapplyDel(data){
        return $http.post('/projectmeasure/personDemand/delete',data)
    }
    //项目名字
    function AllProjectNames(){
        return $http.get('/projectmeasure/coststatus/AllProjectNames')
    }
});

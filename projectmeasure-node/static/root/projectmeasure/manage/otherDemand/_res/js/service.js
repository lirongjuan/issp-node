var app = angular.module('otherDemandServe',[]);
app.factory('otherDemandSer',function ($http) {
    return {
        listMarketserve1 : listMarketserve,
        menuPermission : menuPermission,
        countBaseInfo1:countBaseInfo,
        addMarketserveapply1:addMarketserveapply,
        getOneById1:getOneById,
        marketserveapplyEdit1:marketserveapplyEdit,
        marketserveapplyDel1:marketserveapplyDel,
        projectNames:projectNames
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/otherDemand/guidePermission/'+data);
    }
    //列表
    function listMarketserve(data) {
        return $http.get('/projectmeasure/otherDemand/list',{
            params:data
        })
    }
    //分页
    function countBaseInfo(){
        return $http.get('/projectmeasure/otherDemand/count')
    }
    //添加
    function addMarketserveapply(data){
        return $http.post('/projectmeasure/otherDemand/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/projectmeasure/otherDemand/getOneById',data);
    }
    //编辑
    function marketserveapplyEdit(data){
        return $http.post('/projectmeasure/otherDemand/edit',data);
    }
    //删除
    function marketserveapplyDel(data){
        return $http.post('/projectmeasure/otherDemand/delete',data);
    }
    //分页
    function projectNames(){
        return $http.get('/projectmeasure/otherDemand/projectNames');
    }
});

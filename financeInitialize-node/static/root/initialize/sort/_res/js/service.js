var app = angular.module('assetsServe',[]);
app.factory('assetsSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listMarketserve1 : listMarketserve,
        countBaseInfo1:countBaseInfo,
        addMarketserveapply1:addMarketserveapply,
        firstList:firstList,
        getOneById1:getOneById,
        marketserveapplyEdit1:marketserveapplyEdit,
        marketserveapplyDel1:marketserveapplyDel
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/category/guidePermission/'+data);
    }
    //列表 
    function listMarketserve(data) {
        return $http.get('/sort/common/list',{
            params:data
        })
    }
    //分页
    function countBaseInfo(data){
        return $http.get('/sort/common/count',{
            params:data
        })
    }
    //添加
    function addMarketserveapply(data){
        return $http.post('/sort/common/add',data)
    }
    //获取一级列表
    function firstList(data){
        return $http.get('/sort/common/firstList',{
            params:data
        })
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/sort/common/getOneById',data)
    }
    //编辑
    function marketserveapplyEdit(data){
        return $http.post('/sort/common/edit',data)
    }
    //删除
    function marketserveapplyDel(data){
        return $http.post('/sort/common/delete',data)
    }
});

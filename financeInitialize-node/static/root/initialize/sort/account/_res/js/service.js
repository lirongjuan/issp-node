var app = angular.module('accountServe',[]);
app.factory('accountSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listMarketserve1 : listMarketserve,
        countBaseInfo1:countBaseInfo,
        addMarketserveapply1:addMarketserveapply,
        SecondList:SecondList,
        ThirdList:ThirdList,
        getOneById1:getOneById,
        marketserveapplyEdit1:marketserveapplyEdit,
        marketserveapplyDel1:marketserveapplyDel,
        allFirstsubject:allFirstsubject
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/category/guidePermission/'+data);
    }
    //列表
    function listMarketserve(data) {
        return $http.get('/sort/account/list',{
            params:data
        })
    }
    //分页
    function countBaseInfo(){
        return $http.get('/sort/account/count')
    }
    //添加
    function addMarketserveapply(data){
        return $http.post('/sort/account/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/sort/account/getOneById',data)
    }
    //编辑
    function marketserveapplyEdit(data){
        return $http.post('/sort/account/edit',data)
    }
    //删除
    function marketserveapplyDel(data){
        return $http.post('/sort/account/delete',data)
    }  
    //获取二级
    function SecondList(data) {
        return $http.get('/sort/account/SecondList',{
            params:data
        })
    }
    //获取三级  
    function ThirdList(data) {
        return $http.get('/sort/account/ThirdList',{
            params:data
        })
    }
    //获取所有的一级科目
    function allFirstsubject(data) {
        return $http.get('/sort/account/allFirstsubject',{
            params:data
        })
    }
});

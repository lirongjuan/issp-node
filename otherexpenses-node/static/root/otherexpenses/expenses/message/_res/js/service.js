var app = angular.module('currencyServe',[]);
app.factory('currencySer',function ($http) {
    return {
        menuPermission:menuPermission,
        allList:allList,
        allCount:allCount,
        addMarketserveapply1:addMarketserveapply,
        getOneById1:getOneById,
        marketserveapplyEdit1:marketserveapplyEdit,
        marketserveapplyDel1:marketserveapplyDel,
        projectgroup:projectgroup,
        areaList:areaList,
        projectType:projectType,
        projectName:projectName
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/expenses/guidePermission/'+data);
    }
    //列表
    function allList(data) {
        return $http.get('/expenses/message/list',{
            params:data
        })
    }
    //分页
    function allCount(){
        return $http.get('/expenses/message/count')
    }
    //添加
    function addMarketserveapply(data){
        return $http.post('/expenses/message/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/expenses/message/getOneById',data)
    }
    //编辑
    function marketserveapplyEdit(data){
        return $http.post('/expenses/message/edit',data)
    }
    //删除
    function marketserveapplyDel(data){
        return $http.post('/expenses/message/delete',data)
    }
    //地区汇总
    function areaList(data){
        return $http.get('/expenses/message/arealist',{
            params:data
        })
    }
    //项目组汇总
    function projectgroup(data){
        return $http.get('/expenses/message/projectgrouplist',{
            params:data
        })
    }
    //类型汇总
    function projectType(data){
        return $http.get('/expenses/message/projectTypeList',{
            params:data
        })
    }
    //项目名称汇总
    function projectName(data){
        return $http.get('/expenses/message/projectNameList',{
            params:data
        })
    }
});

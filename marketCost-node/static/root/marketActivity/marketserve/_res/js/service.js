var app = angular.module('marketserveSer',[]);
app.factory('marketserveSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listMarketserve : listMarketserve,
        countBaseInfo:countBaseInfo,
        addMarketserveapply:addMarketserveapply,
        addCustomerinfo:addCustomerinfo,
        getOneById:getOneById,
        marketserveapplyEdit:marketserveapplyEdit,
        marketserveapplyDel:marketserveapplyDel,
        fundModuleOpinionEidt:fundModuleOpinionEidt,
        executiveOpinionEidt:executiveOpinionEidt,
        viewCustomer:viewCustomer,
        editCustomer:editCustomer,
        viewSigning:viewSigning,
        getAllAreas:getAllAreas
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/marketserve/guidePermission/'+data);
    }
    //列表
    function listMarketserve(data) {
        return $http.get('/marketActivity/marketserve/list',{
            params:data
        })
    }
    //分页
    function countBaseInfo(){
        return $http.get('/marketserve/count')
    }
    //添加市场招待申请
    function addMarketserveapply(data){
        return $http.post('/marketActivity/marketserve/add',data)
    }
    //添加客户信息
    function addCustomerinfo(data){
        return $http.post('/marketActivity/customerinfo/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.get('/marketActivity/marketserve/getOneById',{
            params:data
        })
    }
    //编辑
    function marketserveapplyEdit(data){
        return $http.post('/marketActivity/marketserve/edit',data)
    }
    //删除
    function marketserveapplyDel(data){
        return $http.post('/marketActivity/marketserveApply/delete',data)
    }
    //编辑 运营商务部资金模块意见
    function fundModuleOpinionEidt(data) {
        return $http.post('/marketActivity/marketserve/OpinionEidt',data)
    }
    //编辑 决策层审核意见
    function executiveOpinionEidt(data) {
        return $http.post('/marketActivity/marketserve/executiveEidt',data)
    }
    //查看客户信息列表
    function viewCustomer(data) {
        return $http.get('/marketActivity/marketserveapply/viewCustomer',{
            params:data
        })
    }
    //编辑 客户信息
    function editCustomer(data) {
        return $http.post('/marketActivity/servereCordApply/editCustomer',data)
    }
     //查看附件列表
    function viewSigning(data) {
        return $http.get('/marketActivity/viewFile',{
            params:data
        })
    }
    //获取所有的地区
    function getAllAreas(){
        return $http.get('/marketActivity/allreas')
    }
});

var app = angular.module('taxesmanageServe',[]);
app.factory('taxesmanageSer',function ($http) {
    return {
        menuPermission:menuPermission,
        allList:allList,
        allCount:allCount,
        addData:addData,
        getOneById1:getOneById,
        editData:editData,
        marketserveapplyDel1:marketserveapplyDel,
        viewList:viewList,
        collectList:collectList,
        viewSigning:viewSigning,
        getCompany:getCompany
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/taxmanagement/guidePermission/'+data);
    }
    //列表
    function allList(data) {
        return $http.get('/taxes/taxmanagement/list',{
            params:data
        })
    }
    //分页
    function allCount(){
        return $http.get('/taxes/taxmanagement/count')
    }
    //添加
    function addData(data){
        return $http.post('/taxes/taxmanagement/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/taxes/taxmanagement/getOneById',data)
    }
    //编辑
    function editData(data){
        return $http.post('/taxes/taxmanagement/editData',data)
    }
    //删除
    function marketserveapplyDel(data){
        return $http.post('/taxes/taxmanagement/delete',data)
    }
    //查看
    function viewList(data){
        return $http.get('/taxes/taxmanagement/viewList',{
            params:data
        })
    }
    //获取所有公司
    function getCompany(){
        return $http.get('/taxes/taxmanagement/getCompany')
    }
    //汇总
    function collectList(data){
        return $http.get('/taxes/taxmanagement/companyList',{
            params:data
        })
    }
     //查看附件列表
    function viewSigning(data) {
        return $http.get('/taxmanagement/viewFile',{
            params:data
        })
    }
});

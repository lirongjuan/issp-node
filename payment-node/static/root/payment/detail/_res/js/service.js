var app = angular.module('detailServer',[]);
app.factory('detailSer',function ($http) {
    return {
        listDetail:listDetail,
        countDetail:countDetail,
        addDetail:addDetail,
        editDetail:editDetail,
        findDetailId:findDetailId,
        deleteDetail:deleteDetail,
        idByDetail:idByDetail,
        summaryDetail:summaryDetail,
        listSummaryArea:listSummaryArea,
        summaryDetails:summaryDetails,
        listDetails:listDetails,
        summaryProDetail:summaryProDetail,
        listSummaryPro:listSummaryPro,
        summaryProDetails:summaryProDetails,
        listSummaryGeneral:listSummaryGeneral,
        summaryGeneralDetails:summaryGeneralDetails,
        summaryGeneralDetail:summaryGeneralDetail,
        listNameGroup:listNameGroup,
        menuPermission:menuPermission,
        allAuditTime:allAuditTime,
        allArea:allArea,
        summaryContrast:summaryContrast,
        allPlanTime:allPlanTime,
        allERPTime:allERPTime,
        allBillTime:allBillTime,
        editTime:editTime
    };
    function listDetail(data) {
        return $http.get('/listDetail/list',{
            params: data
        })
    }
    //分页总条数
    function countDetail(){
        return $http.get('/countDetail/count')
    }
    //添加
    function addDetail(data){
        return $http.post('/addDetail/add',data)
    }
    //获取id
    function idByDetail(){
        return $http.get('/idByDetail/id')
    }
    //编辑
    function editDetail(data){
        return $http.post('/editDetail/edit',data)
    }
    //id查询
    function findDetailId(data){
        return $http.get('/findDetailId/info',{
            params:data
        })
    }
    //删除
    function deleteDetail(data){
        return $http.get('/deleteDetail/delete',{
            params: data
        })
    }
    //汇总
    function summaryDetail(data){
        return $http.get('/summaryDetail/summary?areas='+data.join(','))
    }
    //查询所有地区
    function  listSummaryArea() {
        return $http.get('/listSummaryArea/id')
    }
    //详情
    function summaryDetails(data){
        return $http.get('/summaryDetails/summary?areas='+data.join(','))
    }
    function listDetails(data) {
        return $http.get('/listDetails/list',{
            params:data
        })
    }
    //项目汇总
    function summaryProDetail(data){
        return $http.get('/summaryProDetail/summary?innerNames='+data.join(','))
    }
    //项目
    function  listSummaryPro() {
        return $http.get('/listSummaryPro/id')
    }
    function summaryProDetails(data){
        return $http.get('/summaryProDetails/summary?innerNames='+data.join(','))
    }
    //总包商
    function summaryGeneralDetail(data){
        return $http.get('/summaryGeneralDetail/summary?contractors='+data.join(','))
    }
    function  listSummaryGeneral() {
        return $http.get('/listSummaryGeneral/id')
    }
    function summaryGeneralDetails(data){
        return $http.get('/summaryGeneralDetails/summary?contractors='+data.join(','))
    }
    function listNameGroup(data) {
        return $http.post('/listNameGroup/group',{params:data})
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/detail/guidePermission/'+data);
    }
    //签字审批时间
    function allAuditTime(data) {
        return $http.get('/auditTime/time',{params:data})
    }
    //预计支付时间
    function allPlanTime(data) {
        return $http.get('/planTime/time',{params:data})
    }
    //ERP结算审批时间
    function allERPTime(data) {
        return $http.get('/allERPTime/time',{params:data})
    }
    //发票审核时间
    function allBillTime(data) {
        return $http.get('/allBillTime/time',{params:data})
    }
    //地区
    function allArea(){
        return $http.get('/allArea/area')
    }
    //时间
    function editTime(data){
        return $http.post('/editTime/edit',data)
    }
    //对比汇总
    function summaryContrast(data){
        return $http.post('/summaryContrast/summary',data)
    }
});

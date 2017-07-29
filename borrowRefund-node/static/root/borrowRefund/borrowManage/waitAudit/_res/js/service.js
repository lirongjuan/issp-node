var app = angular.module('waitAuditServe',[]);
app.factory('waitAuditSer',function ($http) {
    return {
        menuPermission:menuPermission,
        allList:allList,
        allCount:allCount,
        addData:addData,
        getOneById1:getOneById,
        editData:editData,
        allThirdSubject:allThirdSubject,
        allPlains:allPlains,
        FirstAndSecond:FirstAndSecond,
        auditDetailList:auditDetailList,
        chargerAudit:chargerAudit,
        listLendAudit:listLendAudit,
        operateAdit:operateAdit,
        congelByOperate:congelByOperate,
        congelByCharger:congelByCharger,
        cancelCongel:cancelCongel
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/borrowRefund/borrowManage/'+data);
    }
    //列表
    function allList(data) {
        return $http.get('/borrowManage/waitAudit/list',{
            params:data
        })
    }
    //分页
    function allCount(){
        return $http.get('/borrowManage/waitAudit/count')
    }
    //添加
    function addData(data){
        return $http.post('/borrowManage/waitAudit/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.get('/borrowManage/applylend/getOneById',{
            params:data
        })
    }
    //编辑
    function editData(data){
        return $http.post('/borrowManage/waitAudit/editData',data)
    }
    //获取所有三级科目
    function allThirdSubject(){
        return $http.get('/borrowManage/applylend/allSubject');
    }
    //获取说明
    function allPlains(data) {
        return $http.post('/borrowManage/applylend/allPlains',data)
    }
    //获取一级二级
    function FirstAndSecond(data) {
        return $http.post('/borrowManage/applylend/FirstAndSecond',data)
    }
    //负责人审核
    function chargerAudit(data){
        return $http.post('/borrowManage/waitAudit/chargerAudit',data)
    }
    //审核详情
    function auditDetailList(data) {
        return $http.get('/borrowManage/applyErr/applyErrDetail',{
            params:data
        })
    }
    //总经办
    function listLendAudit(data) {
        return $http.post('/borrowManage/waitAudit/listLendAudit',data)
    }
    //运营部
    function operateAdit(data) {
        return $http.post('/borrowManage/waitAudit/operateAdit',data)
    }
    //运营部冻结
    function congelByOperate(data) {
        return $http.post('/borrowManage/waitAudit/congelByOperate',data)
    }
    //负责人冻结
    function congelByCharger(data) {
        return $http.post('/borrowManage/waitAudit/congelByCharger',data)
    }
    //负责人取消冻结
    function cancelCongel(data) {
        return $http.post('/borrowManage/waitAudit/cancelCongel',data)
    }
});

var app = angular.module('waitPaymentServe',[]);
app.factory('waitPaymentSer',function ($http) {
    return {
        allList:allList,
        allCount:allCount,
        getOneById:getOneById,
        editData:editData,
        allThirdSubject:allThirdSubject,
        allPlains:allPlains,
        FirstAndSecond:FirstAndSecond,
        allPersonnel:allPersonnel,
        listAccountCom:listAccountCom,
        menuPermission:menuPermission
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/borrowRefund/borrowManage/'+data);
    }
    //列表
    function allList(data) {
        return $http.get('/borrowManage/waitPayment/list',{
            params:data
        })
    }
    //分页
    function allCount(){
        return $http.get('/borrowManage/waitPayment/count')
    }
    //获取付款来源
    function listAccountCom(){
        return $http.get('/borrowManage/waitPayment/listAccountCom')
    }
    //id编辑
    function getOneById(data) {
        return $http.get('/borrowManage/applylend/getOneById',{
            params:data
        })
    }
    function allPersonnel(data) {
        return $http.get('/borrowManage/applyErr/applyErrDetail',{
            params:data
        })
    }
    //编辑
    function editData(data){
        return $http.post('/borrowManage/waitPayment/editPay',data)
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
});

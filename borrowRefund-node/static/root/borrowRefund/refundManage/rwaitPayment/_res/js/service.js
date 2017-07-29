var app = angular.module('rwaitPaymentServe',[]);
app.factory('rwaitPaymentSer',function ($http) {
    return {
        menuPermission:menuPermission,
        allList:allList,
        allCount:allCount,
        getOneById:getOneById,
        editData:editData,
        predictPay:predictPay,
        listInfor:listInfor,
        listAccountCom:listAccountCom
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/borrowRefund/refundManage/'+data);
    }
    //列表
    function allList(data) {
        return $http.get('/refundManage/rwaitPayment/list',{
            params:data
        })
    }
    //分页
    function allCount(data){
        return $http.get('/refundManage/rwaitPayment/count',{
            params:data
        })
    }
    //id编辑
    function getOneById(data) {
        return $http.get('/refundManage/applyRecord/getOneById',{
            params:data
        })
    }
    //付款
    function editData(data){
        return $http.post('/refundManage/rwaitPayment/editPay',data)
    }
    //预计付款
    function predictPay(data){
        return $http.post('/refundManage/rwaitPayment/PredictPay',data)
    }
    //获取报销单号列表
    function listInfor(){
        return $http.get('/refundManage/finoddInfor/list')
    }
    //获取账户来源
    function listAccountCom(data) {
        return $http.get('/borrowManage/waitPayment/listAccountCom',{
            params:data
        })
    }
    //分
});

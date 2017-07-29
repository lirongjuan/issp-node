var app = angular.module('borrowRecordServe',[]);
app.factory('borrowRecordSer',function ($http) {
    return {
        menuPermission:menuPermission,
        allList:allList,
        allCount:allCount,
        getOneById:getOneById,
        editData:editData,
        EditSend:EditSend,
        bVoucher:bVoucher,
        viewSigning:viewSigning
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/borrowRefund/borrowManage/'+data);
    }
    //列表
    function allList(data) {
        return $http.get('/borrowManage/borrowRecord/list',{
            params:data
        })
    }
    //分页
    function allCount(){
        return $http.get('/borrowManage/borrowRecord/count')
    }
    //id编辑
    function getOneById(data) {
        return $http.get('/borrowManage/applylend/getOneById',{
            params:data
        })
    }
    // 
    function allPersonnel(data) {
        return $http.get('/borrowManage/applyErr/applyErrDetail',{
            params:data
        })
    }
    //编辑
    function editData(data){
        return $http.post('/borrowManage/borrowRecord/editPay',data)
    }
    //编辑 寄件
    function EditSend(data){
        return $http.post('/borrowManage/borrowRecord/EditSend',data)
    }
    //借款凭证
    function bVoucher(data) {
        return $http.get('/borrowManage/hasAnalyze/bVoucher',{
            params:data
        })
    }
    //附件列表
    function viewSigning(data){
        return $http.get('/borrowRecord/listFile',{params:data})
    }
});

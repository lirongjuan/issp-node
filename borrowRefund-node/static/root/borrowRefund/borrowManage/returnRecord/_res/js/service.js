var app = angular.module('returnRecordServe',[]);
app.factory('returnRecordSer',function ($http) {
    return {
        menuPermission:menuPermission,
        allList:allList,
        allCount:allCount,
        getOneById:getOneById,
        editData:editData,
        rVoucher:rVoucher
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/borrowRefund/borrowManage/'+data);
    }
    //列表
    function allList(data) {
        return $http.get('/borrowManage/returnRecord/list',{
            params:data
        })
    }
    //分页
    function allCount(){
        return $http.get('/borrowManage/returnRecord/count')
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
        return $http.post('/borrowManage/returnRecord/editPay',data)
    }
    //生成凭证
    function rVoucher(data) {
        return $http.get('/borrowManage/returnRecord/rVoucher',{
            params:data
        })
    }
});

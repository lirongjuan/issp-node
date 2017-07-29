var app = angular.module('businessCheckServe',[]);
app.factory('businessCheckSer',function ($http) {
    return {
        menuPermission:menuPermission,
        allList:allList,
        allCount:allCount,
        getOneById:getOneById,
        editData:editData,
        viewSigning:viewSigning
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/borrowRefund/borrowManage/'+data);
    }
    //列表
    function allList(data) {
        return $http.get('/borrowManage/businessCheck/list',{
            params:data
        })
    }
    //分页
    function allCount(){
        return $http.get('/borrowManage/businessCheck/count')
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
        return $http.post('/borrowManage/businessCheck/editPay',data)
    }
    //附件列表
    function viewSigning(data){
        return $http.get('/borrowRecord/listFile',{params:data})
    }
});

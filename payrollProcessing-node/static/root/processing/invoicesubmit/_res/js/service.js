var app = angular.module('invoicesubmitServer',[]);
app.factory('invoicesubmitSer',function ($http) {
    return {     
        invoicesubmitDelete:invoicesubmitDelete,//删除上交发票
        invoicesubmitEdit:invoicesubmitEdit,//编辑上交发票
        invoicesubmitList : invoicesubmitList,//列表
        invoicesubmitAdd:invoicesubmitAdd,//新增上交发票
        invoicesubmitFind:invoicesubmitFind,//id查询
        invoicesubmitCount:invoicesubmitCount,//查询总记录数
        invoicesubmitCollect:invoicesubmitCollect,//分页
        invoicesubmitPermission:invoicesubmitPermission
    };
    //删除上交发票
    function  invoicesubmitDelete(data) {
        return $http.get('/invoicesubmitDelete/Delete',{
            params:data
        })
    }
    //编辑上交发票
    function  invoicesubmitEdit(data) {
        return $http.post('/invoicesubmitEdit/Edit',data)
    }
    //列表
    function  invoicesubmitList(data) {
        return $http.get('/invoicesubmitList/List',{
            params:data
        })
    }
    //新增上交发票
    function  invoicesubmitAdd(data) {
        return $http.post('/invoicesubmitAdd/Add',data)
    }
    //id查询
    function  invoicesubmitFind(data) {
        return $http.get('/invoicesubmitFind/Find',{
            params:data
        })
    }
    //查询总记录数
    function  invoicesubmitCount(data) {
        return $http.get('/invoicesubmitCount/Count',{
            params:data
        })
    }
    //分页
    function  invoicesubmitCollect(data) {
        return $http.get('/invoicesubmitCollect/Collect',{
            params:data
        })
    }
    //菜单权限
    function invoicesubmitPermission(data) {
        return $http.get('/invoicesubmitPermission/guidePermission/'+data);
    }
});

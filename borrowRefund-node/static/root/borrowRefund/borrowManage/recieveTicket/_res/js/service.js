var app = angular.module('recieveTicketServe',[]);
app.factory('recieveTicketSer',function ($http) {
    return {
        menuPermission:menuPermission,
        allList:allList,
        allCount:allCount,
        viewSigning:viewSigning
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/borrowRefund/borrowManage/'+data);
    }
    //列表
    function allList(data) {
        return $http.get('/borrowManage/recieveTicket/list',{
            params:data
        })
    }
    //分页
    function allCount(){
        return $http.get('/borrowManage/recieveTicket/count')
    }
    //附件列表
    function viewSigning(data){
        return $http.get('/borrowRecord/listFile',{params:data})
    }
});

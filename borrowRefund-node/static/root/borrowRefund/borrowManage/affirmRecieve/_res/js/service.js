var app = angular.module('affirmRecieveServe',[]);
app.factory('affirmRecieveSer',function ($http) {
    return {
        menuPermission:menuPermission,
        allList:allList,
        allCount:allCount,
        payment:editData
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/borrowRefund/borrowManage/'+data);
    }
    //列表
    function allList(data) {
        return $http.get('/borrowManage/affirmRecieve/list',{
            params:data
        })
    }
    //分页
    function allCount(){
        return $http.get('/borrowManage/affirmRecieve/count')
    }
    //编辑
    function editData(data){
        return $http.post('/borrowManage/affirmRecieve/editPay',data)
    }
});

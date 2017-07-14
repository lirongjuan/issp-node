var app = angular.module('waitconfirmServer',[]);
app.factory('waitconfirmSer',function ($http) {
    return {     
        waitconfirmConfirm:waitconfirmConfirm,//确认薪资
        waitconfirmList:waitconfirmList,//列表
        countWaitconfirm:countWaitconfirm,
        waitconfirmPermission:waitconfirmPermission
    };
    //列表
    function  waitconfirmList(data) {
        return $http.get('/waitconfirmList/List',{
            params:data
        })
    }
    //确认薪资
    function  waitconfirmConfirm(data) {
        return $http.post('/waitconfirmConfirm/Confirm',data)
    }
    //分页
    function  countWaitconfirm(data) {
        return $http.get('/countWaitconfirm/count',{
            params:data
        })
    }
    //菜单权限
    function waitconfirmPermission(data) {
        return $http.get('/waitconfirmPermission/guidePermission/'+data);
    }
});

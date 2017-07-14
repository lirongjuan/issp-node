var app = angular.module('payedServer',[]);
app.factory('payedSer',function ($http) {
    return {     
        payedFirst:payedFirst,//第一次收款确认
        payedSecond:payedSecond,//第二次收款确认
        payedList:payedList,//列表
        countPayed:countPayed,//分页
        payedPermission:payedPermission
    };
    //列表
    function  payedList(data) {
        return $http.get('/payedList/List',{
            params:data
        })
    }
    //第一次收款确认
    function  payedFirst(data) {
        return $http.get('/payedFirst/First',{
            params:data
        })
    }
    //第二次收款确认
    function  payedSecond(data) {
        return $http.get('/payedSecond/Second',{
            params:data
        })
    }
    //分页
    function  countPayed(data) {
        return $http.get('/countPayed/count',{
            params:data
        })
    }
    //菜单权限
    function payedPermission(data) {
        return $http.get('/payedPermission/guidePermission/'+data);
    }
});

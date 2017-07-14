var app = angular.module('confirmedServer',[]);
app.factory('confirmedSer',function ($http) {
    return {     
        confirmedFirst:confirmedFirst,//第一次收款确认
        confirmedSecond:confirmedSecond,//第二次收款确认
        confirmedList:confirmedList,//列表
        countConfirmed:countConfirmed,//分页
        confirmedPermission:confirmedPermission
    };
    //列表
    function  confirmedList(data) {
        return $http.get('/confirmedList/List',{
            params:data
        })
    }
    //第一次收款确认
    function  confirmedFirst(data) {
        return $http.get('/confirmedFirst/First',{
            params:data
        })
    }
    //第二次收款确认
    function  confirmedSecond(data) {
        return $http.get('/confirmedSecond/Second',{
            params:data
        })
    }
    //分页
    function  countConfirmed(data) {
        return $http.get('/countConfirmed/count',{
            params:data
        })
    }
    //菜单权限
    function confirmedPermission(data) {
        return $http.get('/confirmedPermission/guidePermission/'+data);
    }
});

var app = angular.module('detailInfoServer',[]);
app.factory('detailInfoSer',function ($http) {
    return {
        listDetail : listDetail,
        menuPermission:menuPermission,
        countDetail:countDetail,
        getManage:getManage,
        editDetail:editDetail,

    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/contractmanage/guidePermission/'+data);
    }
    function listDetail(data){
        return $http.get('/contractmanage/personal/maps',{params:data})
    }
    function countDetail(){
        return $http.get('/contractmanage/personal/getTotal')
    }
    function editDetail(data){
        return $http.get('/contractmanage/personal/update',{params:data})
    }
    function getManage(data){
        return $http.get('/contractmanage/findById',{params:data})
    }

});

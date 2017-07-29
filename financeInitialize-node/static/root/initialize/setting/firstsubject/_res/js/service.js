var app = angular.module('firstsubjectServe',[]);
app.factory('firstsubjectSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listMarketserve1 : listMarketserve,
        countBaseInfo1:countBaseInfo,
        addMarketserveapply1:addMarketserveapply,
        getOneById1:getOneById,
        marketserveapplyEdit1:marketserveapplyEdit,
        marketserveapplyDel1:marketserveapplyDel
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/firstsubject/guidePermission/'+data);
    }
    //列表
    function listMarketserve(data) {
        return $http.get('/setting/firstsubject/list',{
            params:data
        })
    }
    //分页
    function countBaseInfo(){
        return $http.get('/setting/firstsubject/count')
    }
    //添加
    function addMarketserveapply(data){
        return $http.post('/setting/firstsubject/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/setting/firstsubject/getOneById',data)
    }
    //编辑
    function marketserveapplyEdit(data){
        return $http.post('/setting/firstsubject/edit',data)
    }
    //删除
    function marketserveapplyDel(data){
        return $http.post('/setting/firstsubject/delete',data)
    }
});

var app = angular.module('basicinfoServe',[]);
app.factory('basicinfoSer',function ($http) {
    return {
        listMarketserve1 : listMarketserve,
        menuPermission : menuPermission,
        countBaseInfo1:countBaseInfo,
        addMarketserveapply1:addMarketserveapply,
        addCustomerinfo1:addCustomerinfo,
        getOneById1:getOneById,
        marketserveapplyEdit1:marketserveapplyEdit,
        marketserveapplyDel1:marketserveapplyDel
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/baseinfomanage/guidePermission/'+data);
    }
    //列表
    function listMarketserve(data) {
        return $http.get('/projectmeasure/basicinfo/list',{
            params:data
        })
    }
    //分页
    function countBaseInfo(){
        return $http.get('/projectmeasure/basicinfo/count')
    }
    //添加
    function addMarketserveapply(data){
        return $http.post('/projectmeasure/basicinfo/add',data)
    }
    //添加客户信息
    function addCustomerinfo(data){
        return $http.post('/projectmeasure/basicinfo/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/projectmeasure/basicinfo/getOneById',data)
    }
    //编辑
    function marketserveapplyEdit(data){
        return $http.post('/projectmeasure/basicinfo/edit',data)
    }
    //删除
    function marketserveapplyDel(data){
        return $http.post('/projectmeasure/basicinfo/delete',data)
    }
});

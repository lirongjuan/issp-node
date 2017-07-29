var app = angular.module('emailServer',[]);
app.factory('emailSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listAbilityEmail : listAbilityEmail,
        countEmail:countEmail,
        congealEmail:congealEmail,
        thawEmail:thawEmail,
        deleteEmail:deleteEmail,
        addEmail:addEmail,
        allAreas:allAreas,
        editEmail:editEmail,
        getFourById:getFourById,
        allCollect:allCollect
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/email/guidePermission/'+data);
    }
    //列表
    function  listAbilityEmail(data) {
        return $http.get('/compete/listAbilityEmail/listEmail',{
            params:data
        })
    }
    //分页
    function countEmail(){
        return $http.get('/compete/countEmail/count')
    };
    //冻结
    function congealEmail(data){
        return $http.post('/compete/congealEmail/congeal',data)
    }
    //解冻
    function thawEmail(data){
        return $http.post('/compete/thawEmail/thaw',data)
    }
    //删除
    function deleteEmail(data){
        return $http.post('/compete/deleteEmail/delete',data)
    }
    //添加能力
    function addEmail(data){
        return $http.post('/compete/addEmail/add',data)
    }
    //所有地区
    function allAreas(data) {
        return $http.get('/compete/email/allAreas',{params:data})
    }
    //编辑
    function editEmail(data){
        return $http.post('/compete/editEmail/edit',data)
    }
    //id编辑
    function getFourById(data) {
        return $http.post('/compete/getFourById',data)
    }
    //汇总
    function  allCollect() {
        return $http.get('/compete/listAbilityEmail/collect')
    }
});

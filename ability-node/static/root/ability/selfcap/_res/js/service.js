var app = angular.module('selfcapServer',[]);
app.factory('selfcapSer',function ($http) {
    return {
        listAbilitySelfCap : listAbilitySelfCap,
        countSelfCap:countSelfCap,
        deleteAbilitySelf:deleteAbilitySelf,
        addSelfCapAbility:addSelfCapAbility,
        editSelfCapAbility:editSelfCapAbility,
        editEditSocial:editEditSocial,
        getTwoById:getTwoById,
        addSocialSelf:addSocialSelf,
        listSocialSelf:listSocialSelf,
        countSocial:countSocial,
        deleteSocialSelf:deleteSocialSelf,
        editSocialSelf:editSocialSelf,
        getFiveById:getFiveById,
        menuPermission:menuPermission,
        menuPermission2:menuPermission2,
    };
    //列表
    function listAbilitySelfCap(data) {
       return $http.get('/ability/abilitySelfCap/listAbilitySelfCap',{
            params:data
        })
    }
    //分页
    function countSelfCap(data){
        return $http.get('/abilitySelfCap/count',{
            params:data
        })
    }
    //删除
    function deleteAbilitySelf(data){
        return $http.post('/ability/deleteAbilitySelf/delete',data)
    }
    //添加能力
    function addSelfCapAbility(data){
        return $http.post('/ability/addSelfCapAbility/add',data)
    }
    //编辑
    function editSelfCapAbility(data){
        return $http.post('/ability/editSelfCapAbility/edit',data)
    }
    function editEditSocial(data){
        return $http.post('/ability/editEditSocial/editsocial',data)
    }
    //id编辑
    function getTwoById(data) {
        return $http.post('/ability/getTwoById',data)
    }
    //添加个人社交
    function addSocialSelf(data){
        return $http.post('/ability/addSocialSelf/add',data)
    }
    //个人社交列表
    function listSocialSelf(data) {
        return $http.get('/ability/listSocialSelf/socialList',{
            params:data
        })
    }
    //个人社交总条数
    function countSocial(){
        return $http.get('/countSocial/count')
    }
    //删除个人社交
    function deleteSocialSelf(data){
        return $http.post('/ability/deleteSocialSelf/delete',data)
    }
    //编辑个人社交
    function editSocialSelf(data){
        return $http.post('/ability/editSocialSelf/socialEdit',data)
    }
    //id编辑
    function getFiveById(data) {
        return $http.get('/ability/getFiveById',{
            params:data
        })
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/selfcap/guidePermission/'+data);
    }
    //个人社交资源菜单权限
    function menuPermission2(data) {
        return $http.get('/selfcap2/guidePermission/'+data);
    }
});

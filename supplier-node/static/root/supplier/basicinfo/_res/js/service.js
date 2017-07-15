var app = angular.module('basicinfoServer',[]);
app.factory('basicinfoSer',function ($http) {
    return {
        menuPermission:menuPermission,
        basicInfoList : basicInfoList,
        countBasicInfo:countBasicInfo,
        basicInfoAdd:basicInfoAdd,
        basicInfoEdit:basicInfoEdit,
        editBasicInfoById:editBasicInfoById,
        deleteBasicInfo:deleteBasicInfo,
        rewardSituationList:rewardSituationList,
        rewardBasicAdd:rewardBasicAdd,
        deleteRewardBasic:deleteRewardBasic,
        editRewardBasic:editRewardBasic,
        qualificationList:qualificationList,
        editRewardById:editRewardById,
        qualificationAdd:qualificationAdd,
        deleteQualiBasic:deleteQualiBasic,
        editQualiBasic:editQualiBasic,
        editQualiBasicById:editQualiBasicById,
        contactList:contactList,
        contactAdd:contactAdd,
        deleteContact:deleteContact,
        editContact:editContact,
        editContactById:editContactById,
        cooperationList:cooperationList,
        cooperationAdd:cooperationAdd,
        deleteCooperationBasic:deleteCooperationBasic,
        editCooperation:editCooperation,
        editCooperationById:editCooperationById,
        getAreas:getAreas,
        getsuType:getsuType,
    };
    //菜单权限
  function menuPermission(data) {
        return $http.get('/supplierinformation/guidePermission/'+data);
    }
    //获取所有的地区
    function getAreas(){
        return $http.get('/supplierinformation/listArea')
    }
    //获取所有的供应商类型
    function getsuType(){
        return $http.get('/supplierinformation/listType')
    }
    //列表
    function basicInfoList(data) {
        return $http.get('/basicInfoList/list',{
            params: data
        })
    }
    //总条数
    function countBasicInfo(){
        return $http.get('/countBasicInfo/count')
    }
    //添加
    function basicInfoAdd(data){
        return $http.post('/basicInfoAdd/add',data)
    }
    //编辑
    function basicInfoEdit(data){
        return $http.post('/basicInfoEdit/edit',data)
    }
    //编辑id
    function editBasicInfoById(data){
        return $http.get('/editBasicInfoById/id',{
            params: data
        })
    }
    //删除
    function deleteBasicInfo(data){
        return $http.get('/deleteBasicInfo/delete',{
            params: data
        })
    }
//获奖情况列表
    function rewardSituationList(data){
        return $http.get('/rewardSituationList/rewardList',{
            params: data
        })
    }
//获奖情况添加
    function rewardBasicAdd(data){
        return $http.post('/rewardBasicAdd/add',data)
    }
//获取情况删除
    function deleteRewardBasic(data){
        return $http.get('/deleteRewardBasic/delete',{
            params: data
        })
    }
    //获取情况编辑
    function editRewardBasic(data){
        return $http.post('/editRewardBasic/edit',data)
    }
    //获取情况编辑id
    function editRewardById(data){
        return $http.get('/editRewardById/id',{
            params: data
        })
    }
//企业资质列表
    function qualificationList(data){
        return $http.get('/qualificationList/list',{
            params: data
        })
    }
    //企业资质添加
    function qualificationAdd(data){
        return $http.post('/qualificationAdd/add',data)
    }
    //企业资质删除
    function deleteQualiBasic(data){
        return $http.get('/deleteQualiBasic/delete',{
            params: data
        })
    }
    //企业资质编辑
    function editQualiBasic(data){
        return $http.post('/editQualiBasic/edit',data)
    }
    //企业资质编辑id
    function editQualiBasicById(data){
        return $http.get('/editQualiBasicById/id',{
            params: data
        })
    }
    //联系情况列表
    function contactList(data){
        return $http.get('/contactList/list',{
            params: data
        })
    }
    //联系情况添加
    function contactAdd(data){
        return $http.post('/contactAdd/add',data)
    }
    //联系删除
    function deleteContact(data){
        return $http.get('/deleteContact/delete',{
            params: data
        })
    }
    //联系编辑
    function editContact(data){
        return $http.post('/editContact/edit',data)
    }
    //联系编辑id
    function editContactById(data){
        return $http.get('/editContactById/id',{
            params: data
        })
    }
    //合作列表
    function cooperationList(data){
        return $http.get('/cooperationList/list',{
            params: data
        })
    }
    //合作添加
    function cooperationAdd(data){
        return $http.post('/cooperationAdd/add',data)
    }
    //合作删除
    function deleteCooperationBasic(data){
        return $http.get('/deleteCooperationBasic/delete',{
            params: data
        })
    }
    //合作编辑
    function editCooperation(data){
        return $http.post('/editCooperation/edit',data)
    }
    //合作编辑id
    function editCooperationById(data){
        return $http.get('/editCooperationById/id',{
            params: data
        })
    }
});

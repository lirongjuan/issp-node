var app = angular.module('basicinfoServer',[]);
app.factory('basicinfoSer',function ($http) {
    return {
        listBasicinfo : listBasicinfo,
        countBasicinfo:countBasicinfo,
        addBasicinfo:addBasicinfo,
        getBasicinfo:getBasicinfo,
        editBasicinfo:editBasicinfo,
        deleteBasicinfo:deleteBasicinfo,
        menuPermission:menuPermission,
        allProject:allProject,
        getInnerNum:getInnerNum,
        getProjectByNum:getProjectByNum,
    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/contractprojectinfo/guidePermission/'+data);
    }
    //获取所有名称
    function allProject(){
        return $http.get('/contractprojectinfo/findApplyAreas')
    }
    //获取所有的派工单编号
    function getInnerNum(){
        return $http.get('/contractprojectinfo/allDispatchNum')
    }
    //根据派工单编号查询一个派工单信息
    function getProjectByNum(data){
        return $http.get('/contractprojectinfo/dispatchprojectinfo',{
            params: data
        });
    }

    function listBasicinfo(data) {
        return $http.get('/listBasicinfo',{params:data})
    }
    function countBasicinfo() {
        return $http.get('/countBasicinfo')
    }
    function addBasicinfo(data) {
        return $http.post('/addBasicinfo',data)
    }
    function getBasicinfo(data) {
        return $http.get('/getBasicinfo',{params:data})
    }
    function editBasicinfo(data) {
        return $http.post('/editBasicinfo',data)
    }
    function deleteBasicinfo(data) {
        return $http.get('/deleteBasicinfo',{params:data})
    }

});

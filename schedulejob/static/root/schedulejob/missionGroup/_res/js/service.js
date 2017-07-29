var app = angular.module('missionGroupServer',[]);
app.factory('missionGroupSer',function ($http) {
    return {
        listAbilitymissionGroup : listAbilitymissionGroup,
        countmissionGroup:countmissionGroup,
        congealmissionGroup:congealmissionGroup,
        deletemissionGroup:deletemissionGroup,
        addmissionGroup:addmissionGroup,
        editmissionGroup:editmissionGroup,
        getFourById:getFourById,
        allGroup:allGroup
    };
   
    //列表
    function  listAbilitymissionGroup(data) {
        return $http.get('/schedulejob/missionGroup/list',{
            params:data
        })
    }
    //分页
    function countmissionGroup(){
        return $http.get('/schedulejob/missionGroup/count')
    };
    //开始或关闭任务调度
    function congealmissionGroup(data){
        return $http.post('/schedulejob/missionGroup/Enable',data)
    }
    
    //删除
    function deletemissionGroup(data){
        return $http.post('/schedulejob/missionGroup/delete',data)
    }
    //添加能力
    function addmissionGroup(data){
        return $http.post('/schedulejob/missionGroup/add',data)
    }
    //编辑
    function editmissionGroup(data){
        return $http.post('/schedulejob/missionGroup/edit',data)
    }
    //id编辑
    function getFourById(data) {
        return $http.post('/schedulejob/missionGroup/getById',data)
    }
    //列表
    function allGroup(data) {
        return $http.get('/schedulejob/mission/all',{
            params:data
        })
    }
});

var app = angular.module('missionServer',[]);
app.factory('missionSer',function ($http) {
    return {
        listAbilitymission : listAbilitymission,
        countmission:countmission,
        congealmission:congealmission,
        deletemission:deletemission,
        addmission:addmission,
        editmission:editmission,
        getFourById:getFourById,
        allGroup:allGroup
    };
   
    //列表
    function  listAbilitymission(data) {
        return $http.get('/schedulejob/mission/list',{
            params:data
        })
    }
    //分页
    function countmission(){
        return $http.get('/schedulejob/mission/count')
    };
    //开始或关闭任务调度
    function congealmission(data){
        return $http.post('/schedulejob/mission/Enable',data)
    }
    
    //删除
    function deletemission(data){
        return $http.post('/schedulejob/mission/delete',data)
    }
    //添加能力
    function addmission(data){
        return $http.post('/schedulejob/mission/add',data)
    }
    //编辑
    function editmission(data){
        return $http.post('/schedulejob/mission/edit',data)
    }
    //id编辑
    function getFourById(data) {
        return $http.post('/schedulejob/mission/getById',data)
    }
    //列表
    function allGroup(data) {
        return $http.get('/schedulejob/mission/all',{
            params:data
        })
    }
});

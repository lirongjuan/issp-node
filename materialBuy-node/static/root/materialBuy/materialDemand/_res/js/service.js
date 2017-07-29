var app = angular.module('demandServer',[]);
app.factory('demandSer',function ($http) {
    return {
        menuPermission : menuPermission,
        demandList : demandList,
        countDemand : countDemand,
        addDemand : addDemand,
        findDemandId : findDemandId,
        editMaterial : editMaterial,
        auditDemand : auditDemand,
        deleteDemandWorkers : deleteDemandWorkers,
        getAllArea : getAllArea,
        getAllName : getAllName,
        getAllTeam : getAllTeam,
        demandViewList : demandViewList,
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/tempmatterdemand/guidePermission/'+data);
    }
    //临时物资需求列表
    function demandList(data) {
        return $http.get('/tempmatterdemand/list',{
            params: data
        })
    }
    //临时物资需求分页总条数
    function countDemand(data){
        return $http.get('/tempmatterdemand/count',{params:data})
    }

    //添加
    function addDemand(data){
        return $http.post('/tempmatterdemand/add',data)
    }
    //id查询
    function findDemandId(data){
        return $http.get('/tempmatterdemand/tempmatterdemand',{
            params:data
        })
    }
    //编辑
    function editMaterial(data){
        return $http.post('/tempmatterdemand/edit',data)
    }
    //审核
    function auditDemand(data){
        return $http.post('/tempmatterdemand/audit',data)
    }
    //查看详情
    function demandViewList(data){
        return $http.get('/tempmatterdemand/checkdetail',{
            params: data
        })
    }
    //删除
    function deleteDemandWorkers(data){
        return $http.get('/tempmatterdemand/delete',{
            params: data
        })
    }
    //获取所有地区
    function getAllArea(data){
        return $http.get('/materialbuy/findArea',data)
    }
    //获取所有姓名
    function getAllName(data){
        return $http.get('/materialbuy/findUserNames',data)
    }
    //获取所有项目组
    function getAllTeam(data){
        return $http.get('/materialbuy/findStatus',data)
    }
});

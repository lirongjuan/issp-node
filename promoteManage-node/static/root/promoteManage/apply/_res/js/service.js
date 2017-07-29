var app = angular.module('applyServer',[]);
app.factory('applySer',function ($http) {
    return {
        applyList : applyList,
        menuPermission : menuPermission,
        addapply:addapply,
        editapply:editapply,
        findapplyId:findapplyId,
        countapply:countapply,
        deleteapply:deleteapply,
        getClass:getClass,
        getAllDirections:getAllDirections,
        allSkillLevels:allSkillLevels,
        allNum,allNum,
        getSystem:getSystem,
        conformApply:conformApply,
        writeNumApply:writeNumApply,
        projectManager:projectManager,
        resource:resource,
        business:business,
        moduler:moduler,
        writeManager:writeManager,
        getRank:getRank
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/apply/guidePermission/'+data);
    }
    //列表
    function applyList(data) {
        return $http.get('/apply/list',{
            params: data
        })
    }

    //添加
    function addapply(data){
        return $http.post('/apply/add',data)
    }

    //编辑
    function editapply(data){
        return $http.post('/apply/edit',data)
    }
    //id查询
    function findapplyId(data){
        return $http.get('/apply/getOneById',{
            params:data
        })
    }
    //分页总条数
    function countapply(data){
        return $http.get('/apply/count',{params:data})
    }
    //删除
    function deleteapply(data){
        return $http.get('/apply/delete',{
            params: data

        })
    }
    //获取 查找所有分类
    function getClass(){
        return $http.get('/gradelevel/getClass')
    }
    //获取 查找分类对应的所有管理方向
    function getAllDirections(data){
        return $http.get('/gradelevel/getAllDirections',{params:data})
    };
    //获取 查找分类和管理方向对应的所有技能等级
    function allSkillLevels(data){
        return $http.get('/gradelevel/allSkillLevels',{params:data})
    }
    //获取 查找所有体系
    function getSystem(){
        return $http.get('/apply/AllHierarchysount')
    }
    //获取 查找所有员工编号
    function allNum(){
        return $http.get('/apply/allNum')
    }
    //规划晋升条件
    function conformApply(data){
        return $http.post('/apply/conform',data)
    }
    //综合素养模块填写晋升标准达标数
    function writeNumApply(data){
        return $http.post('/apply/writeNum',data)
    }
    //项目经理
    function projectManager(data){
        return $http.post('/apply/projectManager',data)
    }
    //综合资源部规划模块审核
    function resource(data){
        return $http.post('/apply/resource',data)
    }
    //运营商务部审核
    function business(data){
        return $http.post('/apply/business',data)
    }
    //模块负责人审核
    function moduler(data){
        return $http.post('/apply/moduler',data)
    }
    //总经办审核
    function writeManager(data){
        return $http.post('/apply/writeManager',data)
    }
    //获取 查看晋升申请排名
    function getRank(){
        return $http.get('/apply/getRank')
    }
});

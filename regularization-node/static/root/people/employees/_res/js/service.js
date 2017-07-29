var app = angular.module('employServer',[]);
app.factory('employSer',function ($http) {
    return {
        employEdit : employEdit,
        employDlete:employDlete,
        employAllGetPerson:employAllGetPerson,
        employCheckManageScore:employCheckManageScore,
        employPermission:employPermission,
        employZjbApproval:employZjbApproval,
        employGitName:employGitName,
        employPlanModuleSupply:employPlanModuleSupply,
        employAdd:employAdd,
        employManageScore:employManageScore,
        employLevelEvaluate:employLevelEvaluate,
        employId:employId,
        employAllOrageDepartment:employAllOrageDepartment,
        employGitArea:employGitArea,
        employBudgetModuleSupply:employBudgetModuleSupply,
        employCount:employCount,
        employGitLeave:employGitLeave,
        employAddReturn:employAddReturn,
        employList:employList
        
    };
    //编辑
    function employEdit(data){
        return $http.post('/employEdit/edit',data)
    }
    //删除
    function employDlete(data){
        return $http.get('/employDlete/delete',{
            params: data
        })
    }
    //获取所有用户
    function employAllGetPerson(data){
        return $http.get('/employAllGetPerson/allGetPerson',{
            params: data
        })
    }
    //查看管理层评分
    function employCheckManageScore(data){
        return $http.get('/employCheckManageScore/checkManageScore',{
            params: data
        })
    }
    //功能导航权限
    function employPermission(data){
        return $http.get('/employPermission/permission/'+data);
    }
    //总经办审批
    function employZjbApproval(data){
        return $http.post('/employZjbApproval/zjbApproval',data)
    }
    //根据姓名获取员工编号
    function employGitName(data){
        return $http.get('/employGitName/name',{
            params: data
        })
    }
    //规划模块补充
    function employPlanModuleSupply(data){
        return $http.post('/employPlanModuleSupply/planModuleSupply',data)
    }
    //添加
    function employAdd(data){
        return $http.post('/employAdd/add',data)
    }
    //管理层评分
    function employManageScore(data){
        return $http.post('/employManageScore/manageScore',data)
    }
    //决策层评价
    function employLevelEvaluate(data){
        return $http.post('/employLevelEvaluate/LevelEvaluate',data)
    }
    //id查询
    function employId(data){
        return $http.get('/employId/Id',{
            params:data
        })
    }
    //所有部门下拉值
    function employAllOrageDepartment(data){
        return $http.get('/employAllOrageDepartment/allOrageDepartment',{
            params:data
        })
    }
    //添加中所有的地区
    function employGitArea(data){
        return $http.get('/employGitArea/gitArea',{
            params:data
        })
    }
    //预算模块补充
    function employBudgetModuleSupply(data){
        return $http.post('/employBudgetModuleSupply/budgetModuleSupply',data)
    }
    //分页总条数
    function employCount(){
        return $http.get('/employCount/count')
    }
    //获取所有岗位层级
    function employGitLeave(data){
        return $http.get('/employGitLeave/gitLeave',{
            params: data
        })
    }
    //添加时链接数据
    function employAddReturn(){
        return $http.get('/employAddReturn/addReturn',{
            params: data
        })
    }
    function employList(data) {
        return $http.get('/employList/list',{
            params: data
        })
    }
});

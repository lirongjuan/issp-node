var app = angular.module('courseCollectServer',[]);
app.factory('courseCollectSer',function ($http) {
    return {     
        subjectsOne:subjectsOne,//获取所有一级科目
        subjectsDelete:subjectsDelete,//删除科目汇总表
        subjectsEdit:subjectsEdit,//编辑科目汇总表
        projectSummary:projectSummary,//记账凭证记录项目名称汇总
        subjectsId:subjectsId,//一个科目汇总表
        subjectsList : subjectsList,//科目汇总表列表
        subjectsContrast:subjectsContrast,//汇总对比
        subjectsName:subjectsName,//获取所有项目名称
        teamSummary:teamSummary,//记账凭证记录项目组汇总
        subjectsAudit:subjectsAudit,//添加科目汇总表
        subjectsThree:subjectsThree,//获取所有三级科目
        subjectsTwo:subjectsTwo,//获取所有二级科目
        subjectsListAll:subjectsListAll,//科目汇总表列表总条数
        subjectsExport:subjectsExport,//导出
        subjectsAll:subjectsAll,//获取所有项目组
        subjectSummary:subjectSummary,//记账凭证记录科目汇总
        areasSummary:areasSummary,//记账凭证记录地区汇总
        subjectsAreaAll:subjectsAreaAll,//获取所有地区
        countCourseCollect:countCourseCollect,//分页
        permissionAssignment:permissionAssignment,
        subjectsGetArea:subjectsGetArea
    };
    //获取所有一级科目
    function  subjectsOne(data) {
        return $http.get('/subjectsOne/One',{
            params:data
        })
    }
    //删除科目汇总表
    function  subjectsDelete(data) {
        return $http.get('/subjectsDelete/Delete',{
            params:data
        })
    }
    //编辑科目汇总表
    function  subjectsEdit(data) {
        return $http.post('/subjectsEdit/Edit',data)
    }
    //已审核项目名称汇总
    function  projectSummary(data) {
        return $http.get('/projectSummary/AuditName',{
            params:data
        })
    }
    //一个科目汇总表
    function  subjectsId(data) {
        return $http.get('/subjectsId/Id',{
            params:data
        })
    }
    //科目汇总表列表
    function  subjectsList(data) {
        return $http.get('/subjectsList/list',{
            params:data
        })
    }
    //汇总对比
    function  subjectsContrast(data) {
        return $http.get('/subjectsContrast/Contrast',{
            params:data
        })
    }
    //获取所有项目名称
    function  subjectsName(data) {
        return $http.get('/subjectsName/Name',{
            params:data
        })
    }
    //已审核项目组汇总
    function  teamSummary(data) {
        return $http.get('/teamSummary/AuditAll',{
            params:data
        })
    }
    //添加科目汇总表
    function  subjectsAudit(data) {
        return $http.post('/subjectsAudit/Audit',data)
    }
    //获取所有三级科目
    function  subjectsThree(data) {
        return $http.get('/subjectsThree/Three',{
            params:data
        })
    }
    //获取所有二级科目
    function  subjectsTwo(data) {
        return $http.get('/subjectsTwo/Two',{
            params:data
        })
    }
    //科目汇总表列表总条数
    function  subjectsListAll(data) {
        return $http.get('/subjectsListAll/ListAll',{
            params:data
        })
    }
    //导出
    function  subjectsExport(data) {
        return $http.post('/subjectsExport/Export',data)
    }
    //获取所有项目组
    function  subjectsAll(data) {
        return $http.get('/subjectsAll/All',{
            params:data
        })
    }
    //已审核科目汇总
    function  subjectSummary(data) {
        return $http.get('/subjectSummary/Check',{
            params:data
        })
    }
    //已审核地区汇总
    function  areasSummary(data) {
        return $http.get('/areasSummary/Area',{
            params:data
        })
    }
    //获取所有地区
    function  subjectsAreaAll(data) {
        return $http.get('/subjectsAreaAll/AreaAll',{
            params:data
        })
    }
    //获取所有地区 导出
    function  subjectsGetArea(data) {
        return $http.get('/subjectsGetArea/getArea',{
            params:data
        })
    }
    //分页
    function  countCourseCollect(data) {
        return $http.get('/countCourseCollect/count',{
            params:data
        })
    }
    //菜单权限
    function permissionAssignment(data) {
        return $http.get('/permissionAssignment/permissionAssignment/'+data);
    }
});
